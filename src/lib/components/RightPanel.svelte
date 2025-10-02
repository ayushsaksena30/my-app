<script>
	import ProjectItem from './ProjectItem.svelte';
  import TechStackItem from './TechStackItem.svelte';

  function viewResume() {
    window.open('https://drive.google.com/file/d/1SvhC9ZSM5s_fDeP4L0Cu13FRKJJKHNPc/view?usp=sharing', '_blank');
  }

  function downloadResume() {
    const link = document.createElement('a');
    link.href = 'https://drive.usercontent.google.com/download?id=1SvhC9ZSM5s_fDeP4L0Cu13FRKJJKHNPc&export=download&authuser=0&confirm=t&uuid=d579d083-eecd-45ff-a89a-611b20b1384b&at=AKSUxGPJl6NpCrPvUVkgMiZQyZzq:1759402976867';
    link.download = 'Ayush_Saksena_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  let name = '';
  let email = '';
  let message = '';

  function sendEmail() {
    const subject = `Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:asaksena100@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  }
</script>

<div class="mt-16 md:mt-32"></div>
<div id="about" class="mt-4 mb-8 ml-4 md:ml-8 text-left px-4 md:px-0">
  <h2 class="text-2xl font-bold">
    About
  </h2>

  <div class="flex items-center gap-2 mt-4">
    <img src="/images/icons/iiitdmj.jpg" alt="IIITDM Jabalpur" class="w-10 h-10 md:w-12 md:h-12 self-center flex-shrink-0" />
    <p class="text-gray-700 text-sm md:text-md">
      I am Pre-Final year student at Indian Institute of Information Technology, Jabalpur.
    </p>
  </div>
</div>

<div id="experience" class="mt-8 mb-8 ml-4 md:ml-8 text-left px-4 md:px-0">
  <h2 class="text-2xl font-bold">
    Experience
  </h2>

  <h3 class="text-gray-700 text-md mt-8">
    <div class="flex items-center gap-2">
      <img src="/images/icons/breez-icon.png" alt="Breez" class="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
      <div class="flex flex-col md:flex-row md:items-center md:justify-between w-full">
        <a 
        href="https://www.linkedin.com/posts/ayush-saksena_breez-summerofbitcoin-blockchain-ugcPost-7375751669294243840-Iifx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEzFHGkBL45ca6XkhwvFCQqOLf839HaGHGU" 
        target="_blank" 
        rel="noopener noreferrer"
        class="text-lg md:text-xl font-bold underline">
          Breez
        </a>
        <span class="text-md text-gray-700 whitespace-nowrap mr-32">Sept 2025 - Present</span>
      </div>
    </div>
    <div class="flex flex-col items-start gap-2 mt-4">
      <span class="text-sm md:text-md font-bold ml-2 md:ml-14">Rust Developer Intern</span>
      <p class="text-gray-700 text-sm md:text-md ml-2 md:ml-14">
        Worked on NWC Feature integration in the Breez SDK. 
      </p>
      <span class="text-sm md:text-md font-bold ml-2 md:ml-14">Tech Stack-</span>
      <div class="flex flex-wrap items-center gap-2 md:gap-3 ml-2 md:ml-14 mt-2">
        <TechStackItem imgPath="/images/lang/rust.svg" name="Rust" />
        <TechStackItem imgPath="/images/lang/js.png" name="JavaScript" />
        <TechStackItem imgPath="/images/lang/wasm.svg" name="Web Assembly" />
        <TechStackItem imgPath="/images/lang/go.png" name="Go" />
        <TechStackItem imgPath="/images/tools/git.svg" name="Git" />
      </div>
      <span class="text-sm md:text-md font-bold ml-2 md:ml-14">Work-</span>
      <div class="text-gray-700 text-sm md:text-md ml-2 md:ml-14">
        <ul class="list-disc ml-4 md:ml-6">
          <li>Working on the Breez SDK.</li>
        </ul>
      </div>
    </div>

  </h3>

  <h3 class="text-gray-700 text-md mt-8">
    <div class="flex items-center gap-2">
      <img src="/images/icons/bitcoin.svg" alt="Bitcoin" class="w-12 h-12" />
      <div class="flex items-center justify-between w-full">
        <a 
        href="http://summerofbitcoin.org/2025-accepted-projects" 
        target="_blank" 
        rel="noopener noreferrer"
        class="text-xl font-bold underline">
          Summer of Bitcoin 2025
        </a>
        <span class="text-md text-gray-700 whitespace-nowrap mr-32">May 2025 - Aug 2025</span>
      </div>
    </div>
    <div class="flex flex-col items-start gap-2">
      <span class="text-md font-bold ml-14">Software Engineer Intern @ Breez</span>
      <p class="text-gray-700 text-md ml-14">
        Selected as one of 68 contributors out of 45000+ applicants globally.
      </p>
      <span class="text-md font-bold ml-14">Tech Stack-</span>
      <div class="flex flex-wrap items-center gap-3 ml-14 mt-2">
        <TechStackItem imgPath="/images/lang/rust.svg" name="Rust" />
        <TechStackItem imgPath="/images/lang/react.svg" name="React" />
        <TechStackItem imgPath="/images/lang/next-js.svg" name="Next.js" />
        <TechStackItem imgPath="/images/lang/tailwind.png" name="Tailwind CSS" />
        <TechStackItem imgPath="/images/tools/git.svg" name="Git" />
      </div>
      <span class="text-md font-bold ml-14">Work-</span>
      <div class="text-gray-700 text-md ml-14">
        <ul class="list-disc ml-6">
          <li>Developed optional, modular bridge implementation for Nostr Wallet Connect and Breez SDK.</li>
          <li>Made demo website for the bridge implementation.</li>
          <li>Wrote comprehensive documentation for the project.</li>
        </ul>
      </div>
    </div>

  </h3>

  <h3 class="text-gray-700 text-md mt-16">
    <div class="flex items-center gap-2">
      <img src="/images/icons/bsoc.png" alt="BSOC'25" class="w-12 h-12" />
      <div class="flex items-center justify-between w-full">
        <a 
        href="https://github.com/bsoc-bitbyte/Nudj" 
        target="_blank" 
        rel="noopener noreferrer"
        class="text-xl font-bold underline">
          Bitbyte Summer of Code 2025
        </a>
        <span class="text-md text-gray-700 whitespace-nowrap mr-32">June 2025 - July 2025</span>
      </div>
    </div>
    <div class="flex flex-col items-start gap-2">
      <span class="text-md font-bold ml-14">Android Maintainer @ Nudj</span>
      <p class="text-gray-700 text-md ml-14">
        Maintained and developed FOSS Android app simplifying college events.
      </p>
      <span class="text-md font-bold ml-14">Tech Stack-</span>
      <div class="flex flex-wrap items-center gap-3 ml-14 mt-2">
        <TechStackItem imgPath="/images/lang/kotlin.png" name="Kotlin" />
        <TechStackItem imgPath="/images/lang/compose.png" name="Jetpack Compose" />
        <TechStackItem imgPath="/images/tools/firebase.svg" name="Firebase" />
        <TechStackItem imgPath="/images/tools/github.svg" name="Github" />
      </div>
      <span class="text-md font-bold ml-14">Work-</span>
      <div class="text-gray-700 text-md ml-14">
        <ul class="list-disc ml-6">
          <li>Maintained and enhanced the Nudj Android app for college event management.</li>
          <li>Closed 10+ PRs, ensuring MVVM Architecture.</li>
          <li>Collaborated with the open-source community for project improvements.</li>
        </ul>
      </div>
    </div>
  </h3>

  <h3 class="text-gray-700 text-md mt-16">
    <div class="flex items-center gap-2">
      <img src="/images/icons/sae.png" alt="BSOC'25" class="w-12 h-12" />
      <div class="flex items-center justify-between w-full">
        <a 
        href="https://saeindia.org/jbframework/uploads/2024/11/AeroTHON-2024-Phase2.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        class="text-xl font-bold underline">
          Aerothon 2024
        </a>
        <span class="text-md text-gray-700 whitespace-nowrap mr-32">Jan 2024 - Nov 2024</span>
      </div>
    </div>
    <div class="flex flex-col items-start gap-2">
      <span class="text-md font-bold ml-14">AI/ML Lead @ Air Guardians</span>
      <p class="text-gray-700 text-md ml-14">
        Prepared Algorithm for asynchronous autonomous drone traversal and object detection.
      </p>
      <span class="text-md font-bold ml-14">Tech Stack-</span>
      <div class="flex flex-wrap items-center gap-3 ml-14 mt-2">
        <TechStackItem imgPath="/images/lang/python.svg" name="Python" />
        <TechStackItem imgPath="/images/lang/opencv.png" name="OpenCV" />
        <TechStackItem imgPath="/images/lang/yolo.png" name="YOLO" />
        <TechStackItem imgPath="/images/tools/ubuntu.png" name="Ubuntu" />
      </div>
      <span class="text-md font-bold ml-14">Work-</span>
      <div class="text-gray-700 text-md ml-14">
        <ul class="list-disc ml-6 mr-32">
          <li>Developed and deployed a real-time YOLOv4-Tiny object detection system for UAVs, optimized to run at 20 FPS on onboard hardware.</li>
          <li>Implemented shape detection with automatic snapshots, GPS tagging, and timestamps.</li>
          <li>Designed a dual-mode traversal system supporting manual (keyboard) and autonomous flight for enhanced flexibility.</li>
          <li>Deployed the system on Raspberry Pi 5 with a Waveshare OV5640 camera, Pixhawk 2.4.8, and GPS module, enabling fully onboard computation without cloud dependency..</li>
        </ul>
      </div>
    </div>
  </h3>
</div>

<div id="tech-stack" class="mt-8 mb-8 ml-4 md:ml-8 text-left mr-4 md:mr-16 px-4 md:px-0">
  <h2 class="text-2xl font-bold">
    Tech Stack
  </h2>
  <h3 class="text-sm md:text-md font-bold ml-2 md:ml-14 mt-8">App Development</h3>
  <div class="flex flex-wrap items-center gap-2 md:gap-3 ml-2 md:ml-14 mt-2">
    <TechStackItem imgPath="/images/lang/kotlin.png" name="Kotlin" />
    <TechStackItem imgPath="/images/lang/java.svg" name="Java" />
    <TechStackItem imgPath="/images/lang/flutter.svg" name="Flutter" />
    <TechStackItem imgPath="/images/lang/compose.png" name="Jetpack Compose" />
    <TechStackItem imgPath="/images/lang/xml.svg" name="XML" />
    <TechStackItem imgPath="/images/tools/firebase.svg" name="Firebase" />
  </div>
  <h3 class="text-sm md:text-md font-bold ml-2 md:ml-14 mt-8">Blockchain Development</h3>
  <div class="flex flex-wrap items-center gap-2 md:gap-3 ml-2 md:ml-14 mt-2">
    <TechStackItem imgPath="/images/lang/rust.svg" name="Rust" />
    <TechStackItem imgPath="/images/lang/tokio.png" name="Tokio" />
    <TechStackItem imgPath="/images/lang/js.png" name="JavaScript" />
    <TechStackItem imgPath="/images/lang/go.png" name="Go" />
    <TechStackItem imgPath="/images/lang/wasm.svg" name="Web Assembly" />
  </div>
  <h3 class="text-sm md:text-md font-bold ml-2 md:ml-14 mt-8">AI/ML</h3>
  <div class="flex flex-wrap items-center gap-2 md:gap-3 ml-2 md:ml-14 mt-2">
    <TechStackItem imgPath="/images/lang/python.svg" name="Python" />
    <TechStackItem imgPath="/images/lang/pandas.svg" name="Pandas" />
    <TechStackItem imgPath="/images/lang/numpy.svg" name="Numpy" />
    <TechStackItem imgPath="/images/lang/scikit-learn.png" name="Scikit-Learn" />
    <TechStackItem imgPath="/images/lang/tensorflow.svg" name="TensorFlow" />
    <TechStackItem imgPath="/images/lang/xgb.png" name="XG Boost" />
    <TechStackItem imgPath="/images/lang/opencv.png" name="OpenCV" />
    <TechStackItem imgPath="/images/lang/yolo.png" name="YOLO" />
    <TechStackItem imgPath="/images/lang/seaborn.png" name="Seaborn" />
    <TechStackItem imgPath="/images/lang/matplotlib.png" name="Matplotlib" />

  </div>
  <h3 class="text-sm md:text-md font-bold ml-2 md:ml-14 mt-8">Web Development</h3>
  <div class="flex flex-wrap items-center gap-2 md:gap-3 ml-2 md:ml-14 mt-2">
    <TechStackItem imgPath="/images/lang/react.svg" name="React" />
    <TechStackItem imgPath="/images/lang/svelte.svg" name="Svelte" />
    <TechStackItem imgPath="/images/lang/next-js.svg" name="Next.js" />
    <TechStackItem imgPath="/images/lang/tailwind.png" name="Tailwind CSS" />
    <TechStackItem imgPath="/images/lang/vite.svg" name="Vite" />
    <TechStackItem imgPath="/images/lang/html.svg" name="HTML" />
    <TechStackItem imgPath="/images/lang/css.svg" name="CSS" />
  </div>
  <h3 class="text-sm md:text-md font-bold ml-2 md:ml-14 mt-8">Development Tools</h3>
  <div class="flex flex-wrap items-center gap-2 md:gap-3 ml-2 md:ml-14 mt-2">
    <TechStackItem imgPath="/images/tools/vscode.svg" name="VS Code" />
    <TechStackItem imgPath="/images/tools/studio.png" name="Android Studio" />
    <TechStackItem imgPath="/images/tools/cursor.png" name="Cursor" />
    <TechStackItem imgPath="/images/tools/ubuntu.png" name="Ubuntu" />
    <TechStackItem imgPath="/images/tools/git.svg" name="Git" />
    <TechStackItem imgPath="/images/tools/github.svg" name="Github" />
    <TechStackItem imgPath="/images/tools/figma.svg" name="Figma" />
  </div>
</div>

<div id="projects" class="mt-8 mb-8 ml-4 md:ml-8 text-left mr-4 md:mr-16 px-4 md:px-0">
  <h2 class="text-2xl font-bold">
    Projects
  </h2>
  
  <div class="ml-2 md:ml-14 mt-8 mr-2 md:mr-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
      <ProjectItem 
        title="Mood Predictor"
        subheading="AI application to predict your mood and recommend personalized music."
        features={[
          "Deployed an AI-driven music recommendation app that predicts mood via chat, image analysis, or a test and recommends personalized music.",
          "Handled 2000+ API requests during its first week of launch with seamless integration for Apple Music, Spotify, and YouTube Music.",
          "Published on Play Store, Amazon App Store and Uptodown. Rated 5 stars and over 100+ Global Downloads."
        ]}
        techStack={[
          {imgPath: "/images/lang/kotlin.png", name: "Kotlin"},
          {imgPath: "/images/lang/xml.svg", name: "XML"},
          {imgPath: "/images/icons/gemini.png", name: "Gemini"},
          {imgPath: "/images/tools/studio.png", name: "Android Studio"}
        ]}
        links={[
          {url: "https://github.com/ayushsaksena30/Mood-Predictor-App", label: "GitHub", icon: "/images/tools/github.svg"},
          {url: "https://play.google.com/store/apps/details?id=com.saksena.moodpredictorapp&hl=en_IN", label: "Play Store", icon: "/images/tools/store.svg"},
          {url: "https://mood-predictor.en.uptodown.com/android", label: "Uptodown", icon: "/images/tools/uptodown.svg"}
        ]}
        status="completed"
      />

      <ProjectItem 
        title="AutoNav-detect"
        subheading="Autonomous traversal and object detection for UAVs using computer vision"
        features={[
          "Real-time object detection (Circle, Target, Triangle, Square) and snapshot capture on UAVs.",
          "Optimized YOLOv4-Tiny model achieving 20 FPS, running entirely on the UAV's on-board computer.",
          "Supports both manual (keyboard-based) and autonomous drone traversal."
        ]}
        techStack={[
          {imgPath: "/images/lang/python.svg", name: "Python"},
          {imgPath: "/images/lang/opencv.png", name: "OpenCV"},
          {imgPath: "/images/lang/yolo.png", name: "YOLO"},
          {imgPath: "/images/tools/ubuntu.png", name: "Ubuntu"},
        ]}
        links={[
          {url: "https://github.com/ayushsaksena30/AutoNav-Detect", label: "GitHub", icon: "/images/tools/github.svg"}
        ]}
        status="completed"
      />

      <ProjectItem 
        title="Smart Hybrid Delivery"
        subheading="Hybrid drone delivery path planning system"
        features={[
          "Optimizes last-mile delivery routes using a combination of Electric Vehicles (EVs) and drones.",
          "Aims to reduce carbon emissions and calculates delivery efficiency in real-time.",
          "Built with a React, Vite, Tailwind CSS frontend and a Node.js, Express, MongoDB backend."        ]}
        techStack={[
          {imgPath: "/images/lang/react.svg", name: "React"},
          {imgPath: "/images/lang/tailwind.png", name: "Tailwind CSS"},
          {imgPath: "/images/lang/nodejs.svg", name: "Node.js"},
          {imgPath: "/images/lang/numpy.svg", name: "Numpy"},
          {imgPath: "/images/lang/pandas.svg", name: "Pandas"},
          {imgPath: "/images/lang/scikit-learn.png", name: "Scikit-Learn"}
        ]}
        links={[
          {url: "https://github.com/ayushsaksena30/hybrid-drone-ev", label: "GitHub", icon: "/images/tools/github.svg"},
          {url: "https://www.youtube.com/watch?v=qvc7_PmT1xs", label: "YouTube", icon: "/images/icons/youtube.svg"}
        ]}
        status="completed"
      />

      <ProjectItem 
        title="NotifyMe"
        subheading="Cross Platform app for call and SMS notification forwarding."
        features={[
          "Automated bug detection and security vulnerability scanning",
          "Code style and best practices suggestions",
          "Integration with GitHub and GitLab",
          "Custom rule configuration for teams"
        ]}
        techStack={[
          {imgPath: "/images/lang/kotlin.png", name: "Kotlin"},
          {imgPath: "/images/lang/compose.png", name: "Jetpack Compose"},
          {imgPath: "/images/lang/flutter.svg", name: "Flutter"},
          {imgPath: "/images/tools/studio.png", name: "Android Studio"},
        ]}
        links={[
          {url: "http://github.com/ayushsaksena30/NotifyMe/", label: "GitHub", icon: "/images/tools/github.svg"}
        ]}
        status="in progress"
      />

      <ProjectItem 
        title="Portfolio Website"
        subheading="This website you are currently viewing."
        features={[
          "Responsive, modern UI built with Svelte and Tailwind CSS.",
          "Showcases projects, skills, and resume with interactive elements.",
          "Deployed on Vercel with continuous integration from GitHub."
        ]}
        techStack={[
          {imgPath: "/images/lang/svelte.svg", name: "Svelte"},
          {imgPath: "/images/lang/tailwind.png", name: "Tailwind CSS"},
          {imgPath: "/images/lang/vite.svg", name: "Vite"},
          {imgPath: "/images/tools/github.svg", name: "GitHub"}
        ]}
        links={[
          {url: "http://github.com/ayushsaksena30/my-app", label: "GitHub", icon: "/images/tools/github.svg"},
          {url: "https://ayush-saksena.vercel.app", label: "Vercel", icon: "/images/tools/vercel.svg"}
        ]}
        status="in progress"
      />

      <ProjectItem 
        title="Headline-Hub"
        subheading="News application providing personalized global headlines."
        features={[
          "Facilitates control of ESP32 hardware from an HTML client via a relay server.",
          "Features an intuitive bottom navigation bar for seamless user experience.",
          "Integrates with the GNews API for up-to-date news, built with multi-fragment architecture and RecyclerView."
        ]}
        techStack={[
        {imgPath: "/images/lang/kotlin.png", name: "Kotlin"},
        {imgPath: "/images/lang/xml.svg", name: "XML"},
        {imgPath: "/images/tools/studio.png", name: "Android Studio"}
        ]}
        links={[
          {url: "https://github.com/ayushsaksena30/Headline-Hub", label: "GitHub", icon: "/images/tools/github.svg"},
        ]}
        status="completed"
      />

      <ProjectItem 
        title="Smart Warehouse System"
        subheading="Web-controlled ESP32 system for smart warehouses."
        features={[
          "Facilitates control of ESP32 hardware from an HTML client via a relay server.",
          "Employs a WebSocket communication protocol for real-time interaction between devices.",
          "Provides clear setup instructions for IP configuration, server setup, and ESP32 flashing."
        ]}
        techStack={[
          {imgPath: "/images/lang/python.svg", name: "Python"},
          {imgPath: "/images/tools/github.svg", name: "GitHub API"}
        ]}
        links={[
          {url: "http://github.com/tanishkaa08/Smart-Warehouse-system/", label: "GitHub", icon: "/images/tools/github.svg"},
        ]}
        status="completed"
      />

    </div>
  </div>
</div>

<div id="resume" class="mt-8 mb-8 ml-4 md:ml-8 text-left px-4 md:px-0">
  <h2 class="text-2xl font-bold">
    Resume
  </h2>
  <div class="flex flex-col sm:flex-row items-center gap-4 ml-2 md:ml-14 mt-8">
    <button 
      on:click={viewResume}
      class="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md transition-colors border border-gray-300 hover:border-gray-400 font-medium min-w-[100px]">
      <img src="/images/icons/view.svg" alt="View" class="w-4 h-4" />
      View
    </button>
    <button 
      on:click={downloadResume}
      class="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md transition-colors border border-gray-300 hover:border-gray-400 font-medium min-w-[100px]">
      <img src="/images/icons/download.svg" alt="Download" class="w-4 h-4" />
      Download
    </button>
  </div>
</div>

<div id="contact" class="mt-8 mb-8 ml-4 md:ml-8 text-left px-4 md:px-0">
  <h2 class="text-2xl font-bold">
    Contact
  </h2>
  <div class="ml-2 md:ml-14 mt-8 max-w-md">
    <form on:submit|preventDefault={sendEmail} class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          id="name"
          bind:value={name}
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          id="email"
          bind:value={email}
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          id="message"
          bind:value={message}
          required
          rows="4"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
          placeholder="Your message..."
        ></textarea>
      </div>
      
      <button
        type="submit"
        class="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
      >
        Send Email
      </button>
    </form>
  </div>
</div>