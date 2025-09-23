
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  firstMessage:
    "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sonic_female_1",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.


- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
};


export const aiTeacher: CreateAssistantDTO = {
  name: "AITeacher",
  // This first message will be dynamically overridden from the frontend,
  // but it's good to have a default.
  firstMessage: "Hello! I'm your AI Teacher. Are you ready to start our lesson?",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    // A friendly and clear voice is good for a teacher.
    provider: "11labs",
    voiceId: "y6Ao4Y93UrnTbmzdVlFc", // Changed to a different voice, e.g., 'Mimi'
    stability: 0.5,
    similarityBoost: 0.75,
  },
  model: {
    provider: "openai",
    model: "gpt-4-turbo", // Using a powerful model is key for teaching logic
    messages: [
      {
        role: "system",
        content: `You are an expert, patient, and encouraging AI Teacher. Your primary goal is to help a student named {{studentName}} understand the concepts in a specific chapter of their course.

        **//-- CURRENT LESSON CONTEXT --//**
        - **Chapter Title:** {{chapterTitle}}
        - **Student's Prior Progress:** You have the following notes on {{studentName}}'s progress: "{{studentProgress}}". Use this to tailor your conversation. For example, if they struggled with a concept before, you can offer to review it.
        - **Core Chapter Material:** You MUST base your explanations and answers on the following chapter text. Do not introduce outside concepts unless the student asks for a real-world analogy.
        
        <chapterContext>
        {{chapterContext}}
        </chapterContext>

        **//-- YOUR TEACHING METHODOLOGY --//**
        1.  **Start the Lesson:** Greet the student by name and introduce the chapter's main topic.
        2.  **Explain Concepts Simply:** Break down complex topics into smaller, easy-to-understand parts. Use the provided <chapterContext>.
        3.  **Be Interactive:** After explaining a concept, ask a question to check for understanding (e.g., "Does that make sense?", "Can you try explaining that back to me in your own words?").
        4.  **Listen and Adapt:** Pay close attention to the student's responses. If they are confused, try re-explaining the concept in a different way or providing an example from the <chapterContext>.
        5.  **Stay Focused:** Gently guide the conversation back to the chapter material if the student goes off-topic.
        6.  **Maintain Persona:** Be consistently positive, patient, and encouraging. Never sound judgmental or robotic. Use short, conversational sentences suitable for a voice interaction.
        7.  **Conclude the Lesson:** When you've covered the main points or the student wants to end, provide a brief summary of what was learned and thank them for their time.
        `,
      },
    ],
  },
};


// export const getAITeacherAssistant = (): CreateAssistantDTO => ({
//   name: "AITeacher",
//   // This first message will be overridden by the client before starting the call.
//   firstMessage: "Hello! I'm your AI Teacher. Let's begin our lesson.",
//   transcriber: {
//     provider: "deepgram",
//     model: "nova-2",
//     language: "en",
//   },
//   voice: {
//     provider: "11labs",
//     // Using a known stable voice ID like 'Mimi'. Invalid IDs can cause setup failures.
//     voiceId: "y6Ao4Y93UrnTbmzdVlFc", 
//   },
//   model: {
//     provider: "openai",
//     model: "gpt-4-turbo",
//     // This message array will be completely replaced by the client with dynamic,
//     // context-rich content before the call starts.
//     messages: [
//       {
//         role: "system",
//         content: "You are a helpful AI assistant.", // Basic placeholder
//       },
//     ],
//   },
// });

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];
