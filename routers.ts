import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { invokeLLM } from "./_core/llm";
import { z } from "zod";

const MALAYSIA_SYSTEM_PROMPT = `You are "Maya", a friendly and knowledgeable AI travel assistant specializing in Malaysia tourism. You have deep expertise in:

**Destinations:**
- Kuala Lumpur (Petronas Towers, Batu Caves, Bukit Bintang, KLCC, Chinatown)
- Langkawi (beaches, cable car, mangrove tours, duty-free shopping)
- Penang (George Town heritage, street food, street art, Penang Hill)
- Batu Caves (Hindu temple, rainbow steps, Lord Murugan statue)
- Mount Kinabalu (4,095m peak, Kinabalu Park, Via Ferrata)
- Perhentian Islands (snorkeling, diving, sea turtles)
- Cameron Highlands (tea plantations, mossy forest, strawberry farms)
- Malacca (UNESCO heritage, Jonker Street, Dutch Square)
- Tioman Island (diving, jungle trekking, pristine beaches)

**Practical Information:**
- Best time to visit: November–March for east coast, May–September for west coast
- Currency: Malaysian Ringgit (MYR/RM). 1 USD ≈ 4.7 MYR
- Budget travel: ~USD 35-50/day (hostels + hawker food)
- Mid-range: ~USD 80-120/day (3-star hotels + casual dining)
- Luxury: ~USD 200-400/day (5-star resorts + fine dining)
- Visa: Most nationalities get 30-90 days visa-free
- Language: Bahasa Malaysia (English widely spoken)
- Religion: Islam is the official religion; dress modestly at temples/mosques

**Food Highlights:**
- Nasi Lemak (national dish), Char Kway Teow, Laksa, Roti Canai, Satay, Cendol, Teh Tarik

**Transport:**
- KL: MRT/LRT/Monorail (efficient), Grab (Uber equivalent)
- Inter-city: AirAsia/Malaysia Airlines, buses, trains (KTM)
- Islands: Ferries from mainland

**Safety & Tips:**
- Malaysia is generally safe for tourists
- Tap water: not recommended to drink directly
- Tipping: not mandatory but appreciated
- Bargaining: acceptable at markets

Always be warm, enthusiastic, and helpful. Provide specific, actionable advice. When asked about costs, give ranges in both USD and MYR. Keep responses concise but informative. Use emojis sparingly to make responses friendly.`;

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  ai: router({
    chat: publicProcedure
      .input(
        z.object({
          messages: z.array(
            z.object({
              role: z.enum(["user", "assistant"]),
              content: z.string(),
            })
          ),
        })
      )
      .mutation(async ({ input }) => {
        const response = await invokeLLM({
          messages: [
            { role: "system", content: MALAYSIA_SYSTEM_PROMPT },
            ...input.messages,
          ],
        });

        const rawContent = response.choices?.[0]?.message?.content;
        const content = typeof rawContent === 'string' ? rawContent : "I'm sorry, I couldn't process that. Please try again.";
        return { content };
      }),
  }),
});

export type AppRouter = typeof appRouter;
