<script>
	import ProjectItem from './ProjectItem.svelte';
  import TechStackItem from './TechStackItem.svelte';

  function viewResume() {
    window.open('https://drive.google.com/file/d/1Xx-mq0_zkjb7-wB1dcTh0oK-IUbZqIsV/view?usp=sharing', '_blank');
  }

  function downloadResume() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1Xx-mq0_zkjb7-wB1dcTh0oK-IUbZqIsV';
    link.download = 'Ayush_Saksena_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
</script>

<div class="mt-32"></div>
<div id="about" class="mt-4 mb-8 ml-8 text-left">
  <h2 class="text-2xl font-bold">
    About
  </h2>

  <div class="flex items-center gap-2 mt-4">
    <img src="/images/icons/iiitdmj.jpg" alt="IIITDM Jabalpur" class="w-12 h-12 self-center" />
    <p class="text-gray-700 text-md">
      I am Pre-Final year student at Indian Institute of Information Technology, Jabalpur.
    </p>
  </div>
</div>

<div id="experience" class="mt-8 mb-8 ml-8 text-left">
  <h2 class="text-2xl font-bold">
    Experience
  </h2>

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
        <span class="text-md text-gray-700 whitespace-nowrap mr-32">May 2025 - Present</span>
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

<div id="tech-stack" class="mt-8 mb-8 ml-8 text-left">
  <h2 class="text-2xl font-bold">
    Tech Stack
  </h2>
  <h3 class="text-md font-bold ml-14 mt-8">App Development</h3>
  <div class="flex flex-wrap items-center gap-3 ml-14 mt-2">
    <TechStackItem imgPath="/images/lang/kotlin.png" name="Kotlin" />
    <TechStackItem imgPath="/images/lang/java.svg" name="Java" />
    <TechStackItem imgPath="/images/lang/flutter.svg" name="Flutter" />
    <TechStackItem imgPath="/images/lang/compose.png" name="Jetpack Compose" />
    <TechStackItem imgPath="/images/lang/xml.svg" name="XML" />
    <TechStackItem imgPath="/images/tools/firebase.svg" name="Firebase" />
  </div>
  <h3 class="text-md font-bold ml-14 mt-8">Blockchain Development</h3>
  <div class="flex flex-wrap items-center gap-3 ml-14 mt-2">
    <TechStackItem imgPath="/images/lang/rust.svg" name="Rust" />
    <TechStackItem imgPath="/images/lang/tokio.png" name="Tokio" />
    <TechStackItem imgPath="/images/lang/js.png" name="JavaScript" />
    <TechStackItem imgPath="/images/lang/wasm.svg" name="Web Assembly" />
  </div>
  <h3 class="text-md font-bold ml-14 mt-8">AI/ML</h3>
  <div class="flex flex-wrap items-center gap-3 ml-14 mt-2">
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
  <h3 class="text-md font-bold ml-14 mt-8">Web Development</h3>
  <div class="flex flex-wrap items-center gap-3 ml-14 mt-2">
    <TechStackItem imgPath="/images/lang/react.svg" name="React" />
    <TechStackItem imgPath="/images/lang/svelte.svg" name="Svelte" />
    <TechStackItem imgPath="/images/lang/next-js.svg" name="Next.js" />
    <TechStackItem imgPath="/images/lang/tailwind.png" name="Tailwind CSS" />
    <TechStackItem imgPath="/images/lang/vite.svg" name="Vite" />
    <TechStackItem imgPath="/images/lang/html.svg" name="HTML" />
    <TechStackItem imgPath="/images/lang/css.svg" name="CSS" />
  </div>
  <h3 class="text-md font-bold ml-14 mt-8">Development Tools</h3>
  <div class="flex flex-wrap items-center gap-3 ml-14 mt-2">
    <TechStackItem imgPath="/images/tools/vscode.svg" name="VS Code" />
    <TechStackItem imgPath="/images/tools/studio.png" name="Android Studio" />
    <TechStackItem imgPath="/images/tools/cursor.png" name="Cursor" />
    <TechStackItem imgPath="/images/tools/ubuntu.png" name="Ubuntu" />
    <TechStackItem imgPath="/images/tools/git.svg" name="Git" />
    <TechStackItem imgPath="/images/tools/github.svg" name="Github" />
    <TechStackItem imgPath="/images/tools/figma.svg" name="Figma" />
  </div>
</div>

<div id="projects" class="mt-8 mb-8 ml-8 text-left">
  <h2 class="text-2xl font-bold">
    Projects
  </h2>
</div>

<div id="resume" class="mt-8 mb-8 ml-8 text-left">
  <h2 class="text-2xl font-bold">
    Resume
  </h2>
  <div class="flex items-center gap-4 ml-14 mt-8">
    <button 
      on:click={viewResume}
      class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium min-w-[100px]">
      View
    </button>
    <button 
      on:click={downloadResume}
      class="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors font-medium min-w-[100px]">
      Download
    </button>
  </div>
</div>

<div id="contact" class="mt-8 mb-8 ml-8 text-left">
  <h2 class="text-2xl font-bold">
    Contact
  </h2>
</div>