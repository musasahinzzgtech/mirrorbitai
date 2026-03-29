export const blogPosts = [
  {
    slug: "future-of-ai-nutrition",
    title: "The Future of AI in Nutrition Tracking",
    excerpt:
      "How computer vision and large language models are revolutionizing the way we understand food and health.",
    date: "March 20, 2026",
    category: "AI Research",
    readTime: "6 min read",
    gradient: "from-orange-400 to-rose-500",
    content: [
      {
        heading: null,
        paragraphs: [
          "For most of human history, understanding what you eat has required either painstaking manual effort — weighing food, consulting tables, counting calories — or complete guesswork. Neither approach works at the scale of daily life.",
          "The emergence of multimodal AI models in 2024 and 2025 fundamentally changed this. For the first time, it became possible to photograph a meal and receive nutritional information with clinical-grade accuracy, in under two seconds.",
        ],
      },
      {
        heading: "Vision-Language Models Change Everything",
        paragraphs: [
          "What makes modern food AI so different from prior attempts isn't just accuracy — it's generalization. Earlier systems required specific datasets for specific cuisines. They failed catastrophically on novel dishes or mixed plates.",
          "Vision-language models trained on diverse food datasets can now reason about composition, estimate portion sizes from visual cues, and account for preparation methods — all from a single image. SlayCal uses a proprietary fine-tuned model trained on over 12 million food images across 87 cuisines.",
        ],
      },
      {
        heading: "Precision at Scale",
        paragraphs: [
          "Accuracy means nothing without reliability. Our model serves over 2 million analysis requests per day with a median latency of 340ms. We've invested heavily in inference optimization, including custom ONNX quantization pipelines that reduce model size by 4× without meaningful accuracy loss.",
        ],
      },
      {
        heading: "What's Next for SlayCal",
        paragraphs: [
          "We're currently in beta testing for real-time meal planning — an AI nutritionist that doesn't just analyze what you ate but actively helps you build meals aligned with your specific health goals. Expect it later this year.",
        ],
      },
    ],
  },
  {
    slug: "building-qr-menus-at-scale",
    title: "Building QR Menus at Scale for Restaurants",
    excerpt:
      "The engineering challenges behind processing thousands of menu photos daily with near-perfect accuracy.",
    date: "March 10, 2026",
    category: "Engineering",
    readTime: "8 min read",
    gradient: "from-blue-400 to-indigo-600",
    content: [
      {
        heading: null,
        paragraphs: [
          "When a restaurant uploads a photo of their printed menu, we have roughly three seconds to extract every dish name, description, price, and category — then structure it into a queryable digital format. At scale, this means processing thousands of menus a day, in dozens of languages, from images taken in poor lighting with consumer smartphones.",
          "This is a genuinely hard problem. And it's the core of Restaurant Managment System.",
        ],
      },
      {
        heading: "The Pipeline",
        paragraphs: [
          "Our extraction pipeline runs in three stages. First, a layout detection model identifies the menu's structure — columns, sections, headers. Then a specialized OCR model optimized for restaurant typography extracts text. Finally, a language model parses the raw text into structured JSON, resolving ambiguities and normalizing currencies.",
          "The whole pipeline runs in a serverless environment, scaling from zero to 1,000 concurrent jobs in under 30 seconds.",
        ],
      },
      {
        heading: "Handling Edge Cases",
        paragraphs: [
          "Real-world menus are beautifully chaotic. Hand-written chalkboards. Triple-folded laminated cards. Screenshots of PDFs. We've seen it all. Our test suite now includes 8,400 edge-case menu images, each tagged with the failure mode it was designed to catch.",
        ],
      },
      {
        heading: "Lessons Learned",
        paragraphs: [
          "The biggest lesson: never underestimate the diversity of human creativity in menu design. Our most impactful accuracy improvements have come not from model architecture changes but from better training data — specifically, from the thousands of restaurants who've provided feedback when extraction went wrong.",
        ],
      },
    ],
  },
  {
    slug: "design-philosophy-mirrorbit",
    title: "Our Design Philosophy at Mirrorbit AI",
    excerpt:
      "Why we believe great AI products must be invisible, delightful, and built with radical simplicity.",
    date: "February 28, 2026",
    category: "Design",
    readTime: "4 min read",
    gradient: "from-violet-400 to-purple-600",
    content: [
      {
        heading: null,
        paragraphs: [
          "The best technology disappears. When it works well, you stop noticing the interface and start experiencing the outcome. This is the standard we hold ourselves to at Mirrorbit AI.",
          "It sounds simple. It's brutally difficult to execute.",
        ],
      },
      {
        heading: "Invisible by Design",
        paragraphs: [
          "Every feature we ship goes through what we call the invisibility test: can a new user accomplish the core task without reading any instructions? If not, we redesign. Not the onboarding. The feature.",
          "This has led us to remove more functionality than we've added over the past year. Complexity is easy. Clarity is hard.",
        ],
      },
      {
        heading: "Delight in the Details",
        paragraphs: [
          "Invisible doesn't mean boring. Within the constraint of simplicity, there is enormous room for craftsmanship — in the micro-animation that confirms an action, in the typography that makes content feel premium, in the way a loading state communicates confidence rather than uncertainty.",
        ],
      },
      {
        heading: "Our Process",
        paragraphs: [
          "We run weekly design reviews where any team member can submit a UI they've observed in the wild that does something better than we do. It keeps us honest and constantly learning from the best work in the industry.",
        ],
      },
    ],
  },
  {
    slug: "multimodal-ai-2026",
    title: "Multimodal AI: What 2026 Brings",
    excerpt:
      "A deep dive into the latest multimodal models and how they're changing the landscape of product development.",
    date: "February 15, 2026",
    category: "AI Research",
    readTime: "7 min read",
    gradient: "from-emerald-400 to-teal-600",
    content: [
      {
        heading: null,
        paragraphs: [
          "2025 was the year multimodal AI graduated from demo to deployment. 2026 is the year it becomes table stakes for consumer products. If your app can't reason about images, audio, and text simultaneously, you're already behind.",
          "Here's what we're watching — and building.",
        ],
      },
      {
        heading: "From Vision to Action",
        paragraphs: [
          "The most significant shift in 2026 isn't accuracy — it's latency and action. Models can now not only understand what they see but take structured actions based on that understanding, in real time. For applications like ours, this means the gap between 'scan' and 'result' has collapsed to near-zero.",
        ],
      },
      {
        heading: "Real-world Impact",
        paragraphs: [
          "We're using these advances to build features that would have been science fiction eighteen months ago: real-time dietary coaching that watches your plate as you eat, menu extraction that works in real-time as a camera pans across a table.",
        ],
      },
      {
        heading: "Our Roadmap",
        paragraphs: [
          "In 2026, both SlayCal and Restaurant Managment System will ship video-based features — moving from single-image analysis to continuous understanding across time. We believe this represents the most meaningful step forward in making AI genuinely useful for everyday decisions.",
        ],
      },
    ],
  },
];
