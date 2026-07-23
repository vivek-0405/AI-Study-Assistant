// Mock Provider for Offline Demo Mode
const getRawMockStudyData = (notesText) => {
  const text = (notesText || '').trim();
  const lowerText = text.toLowerCase();

  // 1. Artificial Intelligence (AI) Preset
  if (
    lowerText.includes('artificial intelligence') ||
    (lowerText.includes('ai') && lowerText.includes('computer science') && lowerText.includes('human intelligence'))
  ) {
    return {
      title: "Artificial Intelligence (AI)",
      summary: "Artificial Intelligence (AI) is a branch of computer science that enables machines to perform tasks that normally require human intelligence.",
      detailedSummary: "Key concepts include machine learning, knowledge representation, reasoning, problem-solving, natural language processing, computer vision, and robotics. AI techniques include supervised learning, unsupervised learning, reinforcement learning, and deep learning. Intelligent agents perceive their environment, make decisions, and improve their performance through learning and experience.",
      keyPoints: [
        "Enables machines to perform cognitive tasks normally requiring human intelligence.",
        "Core domains include Machine Learning, NLP, Computer Vision, Robotics, and Automated Reasoning.",
        "Techniques include Supervised, Unsupervised, Reinforcement, and Deep Learning.",
        "Intelligent agents operate by perceiving environments, making decisions, and taking actions.",
        "Powers real-world innovations from autonomous vehicles to generative AI models."
      ],
      importantDefinitions: [
        { term: "Artificial Intelligence (AI)", definition: "The simulation of human intelligence processes by computer systems, including learning, reasoning, and self-correction." },
        { term: "Intelligent Agent", definition: "An autonomous entity that perceives its environment through sensors, acts upon it using actuators, and directs activity toward achieving goals." },
        { term: "Deep Learning", definition: "A subfield of machine learning based on multi-layered artificial neural networks inspired by the human brain structure." },
        { term: "Computer Vision", definition: "A field of AI enabling computers to derive meaningful information from visual inputs such as images and videos." }
      ],
      flashcards: [
        { question: "What is Artificial Intelligence (AI)?", answer: "A branch of computer science that enables machines to simulate human intelligence and perform complex tasks.", difficulty: "easy", hint: "Simulating human intelligence." },
        { question: "What is an intelligent agent in AI?", answer: "An autonomous entity that perceives its environment, makes decisions, and takes actions to achieve goals.", difficulty: "easy" },
        { question: "What are the four main learning techniques in AI?", answer: "Supervised Learning, Unsupervised Learning, Reinforcement Learning, and Deep Learning.", difficulty: "medium" },
        { question: "What is the difference between AI, Machine Learning, and Deep Learning?", answer: "AI is the broad field, Machine Learning is a subset focusing on learning from data, and Deep Learning is a subset using multi-layer neural networks.", difficulty: "medium" },
        { question: "Which AI domain enables computers to process and generate human languages?", answer: "Natural Language Processing (NLP).", difficulty: "easy" },
        { question: "Which AI domain enables machines to interpret and analyze visual images?", answer: "Computer Vision.", difficulty: "easy" },
        { question: "What is reinforcement learning?", answer: "An AI training method where an agent learns to achieve a goal by interacting with an environment through trial, error, and reward signals.", difficulty: "medium" },
        { question: "What is the Turing Test?", answer: "A test proposed by Alan Turing to determine whether a computer can exhibit human-like intelligence in natural conversation.", difficulty: "medium" }
      ],
      quiz: [
        {
          question: "Which field of AI deals with allowing machines to understand, interpret, and generate human language?",
          options: ["Computer Vision", "Natural Language Processing (NLP)", "Robotics", "Knowledge Representation"],
          answer: "Natural Language Processing (NLP)",
          explanation: "NLP is the specific subfield of AI dedicated to computer-human language interactions.",
          difficulty: "easy"
        },
        {
          question: "What defines an intelligent agent in AI systems?",
          options: [
            "Perceiving its environment, making decisions, and taking actions to achieve goals",
            "Only executing pre-programmed static instructions without feedback",
            "Storing large files on hard drives",
            "Rendering 3D graphics on a display"
          ],
          answer: "Perceiving its environment, making decisions, and taking actions to achieve goals",
          explanation: "Intelligent agents continuously perceive, decide, and act upon environmental feedback.",
          difficulty: "easy"
        },
        {
          question: "Which learning technique trains agents using reward and penalty signals?",
          options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Rule-based Logic"],
          answer: "Reinforcement Learning",
          explanation: "Reinforcement learning optimizes actions based on feedback rewards and penalties from an environment.",
          difficulty: "medium"
        }
      ],
      trueFalse: [
        { statement: "Machine Learning is a subfield of Artificial Intelligence.", answer: true, explanation: "ML is a subset of AI focused on learning representations from data without explicit programming." },
        { statement: "An intelligent agent cannot adapt to changing environmental inputs.", answer: false, explanation: "Intelligent agents continuously perceive environmental feedback and adapt their decisions." }
      ],
      fillBlanks: [
        { question: "The branch of computer science enabling machines to perform human-like cognitive tasks is ____.", answer: "Artificial Intelligence", hint: "AI" },
        { question: "AI systems that learn using multi-layered artificial neural networks use ____ learning.", answer: "deep", hint: "Deep neural networks." }
      ],
      shortQuestions: [
        { question: "Explain the relationship between Artificial Intelligence, Machine Learning, and Deep Learning.", sampleAnswer: "Artificial Intelligence is the overarching discipline of creating intelligent machines. Machine Learning is a subset of AI that enables systems to learn from data. Deep Learning is a specialized subset of ML that uses deep multi-layer artificial neural networks.", points: 5 },
        { question: "Describe how intelligent agents function in an environment.", sampleAnswer: "An intelligent agent uses sensors to perceive its environment, processes that input using internal reasoning or learned models to choose an optimal decision, and executes actions via actuators to achieve specific goal metrics.", points: 5 }
      ],
      keyConcepts: [
        { term: "Artificial Intelligence", definition: "Engineering intelligent machines capable of reasoning, learning, perception, and decision making.", example: "Self-driving cars, generative LLMs.", difficulty: "easy" },
        { term: "Intelligent Agents", definition: "Entities that perceive environmental state and execute goal-directed actions.", example: "Robotic vacuum cleaner navigating a room.", difficulty: "medium" }
      ],
      revisionNotes: [
        "AI = Engineering machines to perform cognitive tasks requiring human intelligence.",
        "Core domains: Machine Learning, NLP, Computer Vision, Robotics, Reasoning, Problem Solving.",
        "Techniques: Supervised, Unsupervised, Reinforcement, and Deep Learning.",
        "Agents: Perceive environment -> Process & decide -> Execute action -> Learn from experience.",
        "Applications: Autonomous systems, virtual assistants, medical diagnosis, search engines."
      ]
    };
  }

  // 2. Photosynthesis Preset
  if (
    lowerText.includes('photosynthesis') ||
    (lowerText.includes('chlorophyll') && lowerText.includes('calvin'))
  ) {
    return {
      title: "Photosynthesis & Plant Biology",
      summary: "Photosynthesis is the fundamental biological process by which green plants, algae, and some bacteria convert light energy into chemical energy in the form of glucose.",
      detailedSummary: "This process takes place primarily within the chloroplasts of plant cells, utilizing the green pigment chlorophyll to capture sunlight. The overall chemical equation combines carbon dioxide and water in the presence of light to yield glucose and oxygen as a byproduct. Photosynthesis consists of two main stages: the light-dependent reactions (which capture light in the thylakoid membranes) and the light-independent reactions or Calvin cycle (which fix carbon in the stroma).",
      keyPoints: [
        "Occurs inside the chloroplasts of green plant cells.",
        "Chlorophyll pigment absorbs blue and red wavelengths of light while reflecting green.",
        "Requires Carbon Dioxide (CO2), Water (H2O), and Sunlight.",
        "Produces Glucose (C6H12O6) as chemical energy and Oxygen (O2) as a byproduct.",
        "Consists of Light-Dependent Reactions (thylakoid) and the Calvin Cycle (stroma)."
      ],
      importantDefinitions: [
        { term: "Chloroplast", definition: "An organelle found in plant and algae cells where photosynthesis occurs." },
        { term: "Chlorophyll", definition: "A green pigment found in chloroplasts that absorbs light energy for photosynthesis." },
        { term: "Thylakoid", definition: "Flattened membrane sacs inside the chloroplast where light-dependent reactions take place." },
        { term: "Stroma", definition: "The fluid-filled space surrounding the thylakoid membranes where the Calvin cycle occurs." }
      ],
      flashcards: [
        { question: "What are the primary reactants of photosynthesis?", answer: "Carbon dioxide, water, and sunlight.", difficulty: "easy", hint: "What does a plant need to survive?" },
        { question: "Where do the light-dependent reactions occur?", answer: "In the thylakoid membranes of the chloroplast.", difficulty: "medium", hint: "It happens on the internal membranes." },
        { question: "What is the primary green pigment involved in absorbing light?", answer: "Chlorophyll A and B.", difficulty: "easy" },
        { question: "What is the carbon-fixing cycle of photosynthesis called?", answer: "The Calvin Cycle (or light-independent reactions).", difficulty: "medium" },
        { question: "What is the chemical formula for glucose?", answer: "C6H12O6", difficulty: "medium" },
        { question: "What gas is released as a byproduct during the light reactions?", answer: "Oxygen (O2)", difficulty: "easy" },
        { question: "What energy-carrying molecules are produced in the light reactions?", answer: "ATP and NADPH", difficulty: "hard" },
        { question: "What enzyme fixes carbon dioxide in the Calvin Cycle?", answer: "RuBisCO", difficulty: "hard" }
      ],
      quiz: [
        {
          question: "Which of the following is NOT required for photosynthesis?",
          options: ["Water", "Carbon Dioxide", "Oxygen", "Sunlight"],
          answer: "Oxygen",
          explanation: "Oxygen is a byproduct produced by photosynthesis, not a reactant required to start it.",
          difficulty: "easy"
        },
        {
          question: "In which part of the chloroplast does the Calvin Cycle occur?",
          options: ["Thylakoid Membrane", "Stroma", "Outer Membrane", "Intermembrane Space"],
          answer: "Stroma",
          explanation: "The stroma is the fluid surrounding the thylakoids and contains the enzymes necessary for carbon fixation.",
          difficulty: "medium"
        },
        {
          question: "What wavelength colors of light does chlorophyll absorb most effectively?",
          options: ["Green and Yellow", "Blue and Red", "Red and Green", "Infrared and Ultraviolet"],
          answer: "Blue and Red",
          explanation: "Chlorophyll absorbs blue and red light very efficiently and reflects green light, which is why plants appear green.",
          difficulty: "medium"
        },
        {
          question: "What is the function of stomata in plant leaves?",
          options: ["Absorb water from soil", "Capture solar photons", "Regulate gas exchange (CO2 and O2)", "Conduct sucrose transport"],
          answer: "Regulate gas exchange (CO2 and O2)",
          explanation: "Stomata are microscopic pores on leaf surfaces that open and close to allow gas diffusion and control transpiration.",
          difficulty: "hard"
        },
        {
          question: "Which molecule is split during the light-dependent reactions to provide electrons?",
          options: ["Glucose", "Carbon Dioxide", "Water", "ATP"],
          answer: "Water",
          explanation: "Water photolysis splits H2O molecules into protons, electrons, and oxygen gas to replace electrons lost by photosystem II.",
          difficulty: "hard"
        },
        {
          question: "What type of organism performs photosynthesis?",
          options: ["Autotroph", "Heterotroph", "Saprophytic", "Chemoheterotroph"],
          answer: "Autotroph",
          explanation: "Autotrophs (specifically photoautotrophs) synthesize their own food using light energy.",
          difficulty: "easy"
        }
      ],
      trueFalse: [
        { statement: "Photosynthesis can occur in the dark during the light-independent reactions.", answer: true, explanation: "Although they rely on products of the light reactions (ATP, NADPH), the Calvin cycle reactions themselves do not directly require light." },
        { statement: "Green light is the most efficient color for driving plant photosynthesis.", answer: false, explanation: "Green light is mostly reflected by chlorophyll, making it the least efficient color." },
        { statement: "Water molecules are split during the Calvin cycle to produce oxygen.", answer: false, explanation: "Water splitting occurs during the light-dependent reactions, not the Calvin cycle." },
        { statement: "The light-dependent reactions take place in the stroma.", answer: false, explanation: "They take place in the thylakoid membranes." },
        { statement: "RuBisCO is one of the most abundant proteins on Earth.", answer: true, explanation: "It is the enzyme responsible for fixing carbon in all photosynthetic plants." },
        { statement: "Glucose is the only sugar produced by plants.", answer: false, explanation: "Plants produce G3P during the Calvin cycle, which is then converted into glucose, fructose, sucrose, and starch." }
      ],
      fillBlanks: [
        { question: "The primary organelle where photosynthesis occurs is the ____.", answer: "chloroplast", hint: "It is a green plastid." },
        { question: "The light-dependent reactions produce ATP and ____ to power the Calvin Cycle.", answer: "NADPH", hint: "An electron carrier." },
        { question: "Pores on the underside of leaves that facilitate gas exchange are called ____.", answer: "stomata", hint: "Pores regulated by guard cells." },
        { question: "The process of splitting water using light energy is called ____.", answer: "photolysis", hint: "Photo means light, lysis means split." },
        { question: "The enzyme that catalyzes carbon dioxide fixation is ____.", answer: "RuBisCO", hint: "R-u-B-i-S-C-O" }
      ],
      shortQuestions: [
        { question: "Explain the main difference between light-dependent and light-independent reactions.", sampleAnswer: "Light-dependent reactions occur in the thylakoids and require direct sunlight to split water and generate ATP and NADPH. Light-independent reactions (Calvin cycle) occur in the stroma, do not require direct light, and use ATP and NADPH to fix carbon dioxide into sugars.", points: 5 },
        { question: "Describe how water temperature and carbon dioxide concentrations affect the rate of photosynthesis.", sampleAnswer: "Increasing CO2 levels and temperature generally increases the rate of photosynthesis up to an optimal point. Extremely high temperatures can denature photosynthetic enzymes (like RuBisCO) and close stomata to prevent water loss, which subsequently decreases the rate.", points: 5 },
        { question: "Why do plants appear green under white light?", sampleAnswer: "Plants appear green because their primary photosynthetic pigment, chlorophyll, absorbs red and blue light wavelengths while reflecting green light wavelengths back to our eyes.", points: 3 }
      ],
      keyConcepts: [
        { term: "Light Reactions", definition: "Initial stage capturing solar energy to split water, release oxygen, and generate chemical intermediates ATP and NADPH.", example: "Occurs across photosystems II and I in thylakoids.", difficulty: "medium" },
        { term: "Calvin Cycle", definition: "Set of chemical reactions that fixes carbon dioxide into G3P sugar using ATP and NADPH.", example: "Occurs in the stroma of the chloroplast.", difficulty: "medium" },
        { term: "Carbon Fixation", definition: "The process of converting inorganic carbon (CO2) into organic compounds (sugars) by living organisms.", example: "RuBisCO attaching CO2 to RuBP.", difficulty: "hard" },
        { term: "Photolysis", definition: "The splitting of water molecules into hydrogen ions, electrons, and oxygen gas, powered by light.", example: "H2O -> 2H+ + 2e- + 1/2 O2", difficulty: "hard" }
      ],
      revisionNotes: [
        "Equation: 6CO2 + 6H2O + light -> C6H12O6 + 6O2",
        "Reactants: Carbon Dioxide (from air), Water (from roots), Light (from Sun).",
        "Products: Glucose (stored energy), Oxygen (released to atmosphere).",
        "Chloroplast parts: double membrane, thylakoids (stacked into grana), stroma.",
        "Photosystem II absorbs light first, splitting water (photolysis).",
        "Photosystem I absorbs light next, producing NADPH.",
        "ATP is generated via chemiosmosis through ATP Synthase.",
        "Calvin Cycle steps: 1. Carbon Fixation, 2. Reduction, 3. Regeneration of RuBP."
      ],
      studyTips: [
        "Draw the chloroplast and label where light reactions vs Calvin cycle happen.",
        "Remember that the Calvin cycle doesn't directly need light, but cannot run without ATP/NADPH from light reactions.",
        "Practice writing the chemical equation from memory."
      ],
      difficultConcepts: [
        "Chemiosmosis and the proton gradient building up inside the thylakoid lumen.",
        "The exact carbon-count accounting during the regeneration phase of the Calvin Cycle."
      ],
      examTips: [
        "Don't confuse stomata (leaf pores) with stroma (chloroplast fluid). They sound similar but are completely different!",
        "Be ready to explain why oxygen production rates can be used to measure photosynthesis speed."
      ],
      formulaSheet: [
        "Photosynthesis Equation: 6CO2 + 6H2O + light energy -> C6H12O6 + 6O2",
        "Photolysis: 2H2O -> 4H+ + 4e- + O2"
      ],
      memoryTricks: [
        "Calvin lives in the Stroma (Calvin Cycle occurs in the Stroma).",
        "Thylakoids have light, Stroma is dark (Light reactions in thylakoid, Calvin cycle in stroma)."
      ],
      faqs: [
        { question: "Can plants photosynthesize under artificial light?", answer: "Yes, as long as the artificial light provides the correct wavelengths (specifically red and blue spectrums) that chlorophyll absorbs." },
        { question: "What happens if a plant doesn't get water?", answer: "Photosynthesis stops because water is a source of electrons. Additionally, the plant wilts as stomata close to conserve water, which blocks CO2 absorption." }
      ]
    };
  }

  // 2. Operating Systems Preset
  if (
    lowerText.includes('operating system') ||
    lowerText.includes('operating-system') ||
    (lowerText.includes('cpu scheduling') && lowerText.includes('process management')) ||
    lowerText.includes('virtual memory')
  ) {
    return {
      title: "Operating Systems & Process Management",
      summary: "An operating system (OS) is crucial system software that manages computer hardware, software resources, and provides common services for computer programs.",
      detailedSummary: "The OS acts as an intermediary between user applications and the physical computer hardware. Core areas of responsibility include process management (CPU scheduling, synchronization, and deadlock handling), memory management (paging, segmentation, virtual memory), file system management, device management, and security access controls.",
      keyPoints: [
        "Acts as a resource allocator and hardware manager.",
        "Processes represent programs in execution, containing code, data, stack, and heap.",
        "Process states include New, Ready, Running, Waiting, and Terminated.",
        "CPU Scheduling algorithms decide which ready process runs on the CPU next.",
        "Virtual memory allows execution of processes that are not completely in main memory."
      ],
      importantDefinitions: [
        { term: "Operating System", definition: "Software that manages computer hardware resources and acts as an interface for user applications." },
        { term: "Process", definition: "A program in execution, representing the active entity containing CPU state, memory, and resources." },
        { term: "Kernel", definition: "The core program of the operating system that runs at all times and interacts directly with hardware." },
        { term: "System Call", definition: "The programmatic interface through which a user application requests services from the OS kernel." }
      ],
      flashcards: [
        { question: "What is the difference between a process and a thread?", answer: "A process is an independent execution unit with its own memory space. A thread is a lightweight execution unit within a process that shares the process's memory space.", difficulty: "medium", hint: "Think about shared memory vs isolated memory." },
        { question: "What are the five main states of a process?", answer: "New, Ready, Running, Waiting (Blocked), and Terminated.", difficulty: "easy" },
        { question: "What is virtual memory?", answer: "A memory management technique that mapped logical addresses to physical memory, allowing execution of processes larger than physical RAM.", difficulty: "medium" },
        { question: "What is a system call?", answer: "An interface that allows user-level applications to request privileged operations from the kernel.", difficulty: "easy" },
        { question: "What is context switching?", answer: "The process of saving the state of a CPU process and loading the saved state of another process.", difficulty: "medium" },
        { question: "What is a deadlock?", answer: "A state where a set of processes are blocked because each process is holding a resource and waiting for another resource held by some other process.", difficulty: "medium" },
        { question: "Which CPU scheduling algorithm is non-preemptive and selects the process with the shortest CPU burst?", answer: "Shortest Job First (SJF) scheduling.", difficulty: "medium" },
        { question: "What is thrashing?", answer: "A state of excessive paging activity where the system spends more time swapping pages in and out of disk than executing useful instructions.", difficulty: "hard" }
      ],
      quiz: [
        {
          question: "Which of the following process scheduling algorithms can cause starvation?",
          options: ["Round Robin", "First-Come, First-Served", "Priority Scheduling", "Round Robin with Feedback"],
          answer: "Priority Scheduling",
          explanation: "In priority scheduling, low-priority processes can remain blocked indefinitely if high-priority processes are constantly arriving, causing starvation.",
          difficulty: "medium"
        },
        {
          question: "What is a page fault?",
          options: ["An error in the kernel program", "An access to a memory page that is not currently loaded in RAM", "A hardware defect in memory modules", "A crash of the current process"],
          answer: "An access to a memory page that is not currently loaded in RAM",
          explanation: "A page fault is an interrupt raised by the memory management unit (MMU) when a program accesses a virtual page that is marked invalid or swapped to disk.",
          difficulty: "medium"
        },
        {
          question: "Which of the following is NOT one of Coffman's four conditions for deadlock?",
          options: ["Mutual Exclusion", "No Preemption", "Hold and Wait", "Resource Preemption"],
          answer: "Resource Preemption",
          explanation: "The four conditions are Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Resource Preemption is not a condition; in fact, preempting resources can break deadlocks.",
          difficulty: "hard"
        },
        {
          question: "What is the primary role of the kernel in an operating system?",
          options: ["To provide a user-friendly desktop GUI", "To manage system resources and serve as the core link between software and hardware", "To run web browsers and applications", "To compile source code into machine code"],
          answer: "To manage system resources and serve as the core link between software and hardware",
          explanation: "The kernel is the lowest software layer of the OS, managing physical CPU, memory allocation, device access, and file I/O operations.",
          difficulty: "easy"
        },
        {
          question: "In paging-based memory management, what translates logical addresses to physical addresses?",
          options: ["The Page Directory", "The Page Table", "The Disk Controller", "The Scheduler"],
          answer: "The Page Table",
          explanation: "The page table maps page frame indices to physical memory addresses, allowing the hardware MMU to perform translations on the fly.",
          difficulty: "medium"
        }
      ],
      trueFalse: [
        { statement: "A thread shares its stack with all other threads in the same process.", answer: false, explanation: "Each thread has its own private stack for local variables and function calls, although they share the code, data, and heap regions." },
        { statement: "First-Come, First-Served (FCFS) CPU scheduling is preemptive.", answer: false, explanation: "FCFS is strictly non-preemptive; once a process starts executing, it runs to completion or until it voluntarily blocks." },
        { statement: "Virtual memory can increase the physical capacity of RAM.", answer: false, explanation: "Virtual memory doesn't change physical RAM size; it simulates larger memory by utilizing hard disk space as swap memory." },
        { statement: "Starvation can be cured by a technique called Aging.", answer: true, explanation: "Aging gradually increases the priority of processes that wait in the ready queue for a long time." }
      ],
      fillBlanks: [
        { question: "The core program that runs at all times on a computer is the ____.", answer: "kernel", hint: "Core of the OS." },
        { question: "A CPU scheduling algorithm that allocates equal time slices to each process is ____.", answer: "Round Robin", hint: "Think of rotating turns." },
        { question: "The situation where a set of processes are blocked waiting for resources held by each other is called a ____.", answer: "deadlock", hint: "A locked state of processes." },
        { question: "In memory management, physical memory is broken down into fixed-sized blocks called ____.", answer: "frames", hint: "Paging divides logical memory into pages, physical memory into..." },
        { question: "A lightweight process that shares the address space of its parent is a ____.", answer: "thread", hint: "A thread of execution." }
      ],
      shortQuestions: [
        { question: "Explain the difference between preemptive and non-preemptive CPU scheduling.", sampleAnswer: "Preemptive scheduling allows the OS kernel to interrupt a currently running process and allocate the CPU to another process at any time (e.g. Round Robin). Non-preemptive scheduling guarantees that once a process gains control of the CPU, it keeps it until it finishes or blocks (e.g. FCFS).", points: 5 },
        { question: "What are the four necessary conditions for a deadlock to occur?", sampleAnswer: "1. Mutual Exclusion (only one process can use a resource at a time), 2. Hold and Wait (processes holding resources can request new ones), 3. No Preemption (resources cannot be forcibly taken), 4. Circular Wait (a circular chain of waiting processes exists).", points: 5 }
      ],
      keyConcepts: [
        { term: "Process Control Block (PCB)", definition: "A data structure in the OS kernel that stores all context information (CPU registers, state, memory limits) for a process.", example: "Stores process state 'Ready' and PC counter.", difficulty: "medium" },
        { term: "Thrashing", definition: "A high-frequency page swapping condition that occurs when the active working set of processes exceeds physical RAM capacity.", example: "CPU utilization drops close to zero as disks remain 100% active swapping pages.", difficulty: "hard" }
      ],
      revisionNotes: [
        "Operating System acts as a hardware manager and resource allocator.",
        "Process states: New -> Ready -> Running -> Waiting -> Terminated.",
        "CPU scheduling: FCFS, SJF (provably optimal average wait time), Round Robin (uses time quantums), Priority.",
        "Deadlocks require Coffman conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.",
        "Virtual memory uses Page Tables mapping Logical Pages to Physical Frames.",
        "Starvation occurs when a process waits indefinitely; solved using Aging.",
        "Page replacement algorithms: FIFO, LRU (Least Recently Used), Optimal (oracle-based)."
      ],
      studyTips: [
        "Draw process state transition diagrams.",
        "Calculate Gantt charts for CPU scheduling algorithms to practice turnaround and wait times."
      ],
      difficultConcepts: [
        "The translation lookaside buffer (TLB) cache hits and misses in address translation.",
        "Banker's Algorithm for deadlock avoidance."
      ],
      examTips: [
        "SJF is optimal for minimizing average waiting time. This is a common exam question!",
        "Threads share heap but have private stacks. Stack storage holds function calls and local variables."
      ],
      formulaSheet: [
        "Turnaround Time = Completion Time - Arrival Time",
        "Waiting Time = Turnaround Time - Burst Time"
      ],
      memoryTricks: [
        "LRU stands for Least Recently Used (it replaces the page that hasn't been accessed for the longest time).",
        "ME-HW-NP-CW: Coffman conditions (Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait)."
      ],
      faqs: [
        { question: "What is a system call?", answer: "It is an instruction that switches CPU execution mode from user mode to kernel mode to perform privileged hardware and system actions safely." }
      ]
    };
  }

  // 3. Natural Language Processing (NLP) Preset
  if (
    (lowerText.startsWith('natural language') || lowerText.startsWith('nlp') || lowerText.includes('tokenization') || lowerText.includes('lemmatization')) &&
    !lowerText.includes('artificial intelligence')
  ) {
    return {
      title: "Natural Language Processing (NLP)",
      summary: "Natural Language Processing (NLP) is a branch of Artificial Intelligence (AI) that enables computers to understand, interpret, and generate human language.",
      detailedSummary: "NLP bridges human communication and computer understanding. Key concepts include tokenization, stemming, lemmatization, part-of-speech tagging, named entity recognition, sentiment analysis, and language modeling. Core NLP tasks include text classification, machine translation, question answering, and text summarization, powering applications such as chatbots, virtual assistants, search engines, and translation systems.",
      keyPoints: [
        "Enables computers to understand, interpret, and generate natural human language.",
        "Core text preprocessing includes Tokenization, Stemming, Lemmatization, and POS Tagging.",
        "Key applications include Named Entity Recognition (NER), Sentiment Analysis, and Machine Translation.",
        "Powers real-world tools like Chatbots, Virtual Assistants, Search Engines, and Summarizers.",
        "Uses statistical models, machine learning, and deep neural network architectures (like Transformers)."
      ],
      importantDefinitions: [
        { term: "Natural Language Processing (NLP)", definition: "A branch of AI that enables machines to analyze, understand, and generate human languages." },
        { term: "Tokenization", definition: "The process of breaking down raw text into smaller units called tokens (words, subwords, or characters)." },
        { term: "Lemmatization", definition: "A vocabulary and morphological analysis process that reduces words to their meaningful base dictionary form (lemma)." },
        { term: "Named Entity Recognition (NER)", definition: "An NLP technique that identifies and classifies key entities (people, organizations, locations, dates) in text." }
      ],
      flashcards: [
        { question: "What is tokenization in Natural Language Processing?", answer: "The process of splitting text into smaller units like words or subwords (tokens).", difficulty: "easy", hint: "Splitting text into pieces." },
        { question: "What is the key difference between stemming and lemmatization?", answer: "Stemming chops off word suffixes mechanically (often producing non-words), whereas lemmatization uses dictionary lookup to find the valid base form (lemma).", difficulty: "medium", hint: "One chops endings, one finds dictionary words." },
        { question: "What does POS tagging stand for in NLP?", answer: "Part-Of-Speech Tagging (labeling words as nouns, verbs, adjectives, etc.).", difficulty: "easy" },
        { question: "What NLP task identifies people, places, and dates in text?", answer: "Named Entity Recognition (NER).", difficulty: "medium" },
        { question: "What is sentiment analysis?", answer: "The process of computationally identifying and categorizing opinions or emotions (positive, negative, neutral) expressed in text.", difficulty: "easy" },
        { question: "Name two real-world applications powered by NLP.", answer: "Chatbots/Virtual Assistants, Machine Translation (Google Translate), and Search Engines.", difficulty: "easy" }
      ],
      quiz: [
        {
          question: "Which text preprocessing technique reduces words to their valid dictionary base form?",
          options: ["Lemmatization", "Stemming", "Tokenization", "Normalization"],
          answer: "Lemmatization",
          explanation: "Lemmatization uses vocabulary and morphological rules to reduce words (e.g. 'caring' -> 'care') to valid base dictionary forms.",
          difficulty: "easy"
        },
        {
          question: "What is the primary function of Named Entity Recognition (NER)?",
          options: [
            "Identifying real-world entities such as names, places, organizations, and dates in text",
            "Translating text from English to Spanish automatically",
            "Calculating the word count of a document",
            "Converting audio signals into digital text"
          ],
          answer: "Identifying real-world entities such as names, places, organizations, and dates in text",
          explanation: "NER extracts structured entities (e.g., 'Apple', 'London', '2026') from unstructured text.",
          difficulty: "medium"
        }
      ],
      trueFalse: [
        { statement: "Stemming always produces valid dictionary words.", answer: false, explanation: "Stemming cuts off word endings mechanically and often produces invalid stems (e.g., 'studies' -> 'studi')." },
        { statement: "Tokenization breaks a body of text into individual units like words or punctuation.", answer: true, explanation: "Tokens are the fundamental building blocks processed by NLP models." }
      ],
      fillBlanks: [
        { question: "The process of dividing text into individual words or tokens is called ____.", answer: "tokenization", hint: "Starts with T." },
        { question: "Classifying text into positive, negative, or neutral sentiment is called ____ analysis.", answer: "sentiment", hint: "Measures emotion." }
      ],
      shortQuestions: [
        { question: "Explain the main pipeline steps involved in preprocessing text for an NLP model.", sampleAnswer: "The NLP preprocessing pipeline typically involves noise removal/cleaning, tokenization (splitting text), stop-word removal, part-of-speech tagging, and lemmatization or stemming to normalize words before vectorization.", points: 5 },
        { question: "Describe how NLP powers virtual assistants like Siri, Alexa, or Chatbots.", sampleAnswer: "Virtual assistants use speech-to-text to convert audio to text, intent classification and entity recognition to parse user commands, and language generation to format accurate responses back to the user.", points: 5 }
      ],
      keyConcepts: [
        { term: "Tokenization", definition: "Segmenting raw text streams into discrete tokens for computational modeling.", example: "'AI is great' -> ['AI', 'is', 'great']", difficulty: "easy" },
        { term: "Sentiment Analysis", definition: "Categorizing subjective opinions in text to determine emotional tone.", example: "Detecting positive customer reviews.", difficulty: "medium" }
      ],
      revisionNotes: [
        "NLP = AI branch enabling computer understanding of human language.",
        "Preprocessing: Tokenization -> POS Tagging -> Lemmatization / Stemming -> Vectorization.",
        "Key tasks: Text classification, NER, Sentiment Analysis, Summarization, Machine Translation.",
        "Real-world uses: Chatbots, search engines, voice assistants, spam filters."
      ]
    };
  }

  // 4. Machine Learning Preset
  if (
    lowerText.includes('machine learning') ||
    lowerText.includes('supervised learning') ||
    lowerText.includes('unsupervised learning') ||
    lowerText.includes('deep learning')
  ) {
    return {
      title: "Machine Learning Foundations",
      summary: "Machine Learning (ML) is a subset of artificial intelligence focused on building algorithms that learn patterns from data to make predictions or decisions.",
      detailedSummary: "ML models learn representations from training datasets. Broadly categorized into supervised learning (predicting labeled targets via regression or classification), unsupervised learning (identifying hidden structures like clustering or dimensionality reduction), and reinforcement learning (learning behaviors via agent rewards and punishments). Key concepts include overfitting, regularization, evaluation metrics, and optimization.",
      keyPoints: [
        "Focuses on learning patterns from data without explicit rules.",
        "Supervised learning uses input-output pairs to train models.",
        "Unsupervised learning groups unlabeled data (e.g. K-Means clustering).",
        "Overfitting is when a model learns noise and performs poorly on unseen data.",
        "Underfitting occurs when a model is too simple to capture the data structure."
      ],
      importantDefinitions: [
        { term: "Machine Learning", definition: "A field of study giving computers the ability to learn without being explicitly programmed." },
        { term: "Supervised Learning", definition: "Training models with datasets containing input features and corresponding ground-truth target labels." },
        { term: "Overfitting", definition: "A model modeling training data too closely, capturing noise, resulting in poor generalization on testing data." },
        { term: "Regularization", definition: "Techniques (like L1/L2 penalties) that constrain models to prevent overfitting." }
      ],
      flashcards: [
        { question: "What is the difference between supervised and unsupervised learning?", answer: "Supervised learning uses labeled training data. Unsupervised learning analyzes unlabeled data to find hidden structures.", difficulty: "easy" },
        { question: "What is overfitting?", answer: "When a model learns the training data too well (including noise) and fails to generalize to new, unseen data.", difficulty: "easy" },
        { question: "What is bias in machine learning?", answer: "The error introduced by approximating real-world problems with simplified models. High bias leads to underfitting.", difficulty: "medium" },
        { question: "What is variance in machine learning?", answer: "The model's sensitivity to small fluctuations in the training set. High variance leads to overfitting.", difficulty: "medium" },
        { question: "What is K-fold cross-validation?", answer: "A resampling procedure that splits the dataset into K folds, training on K-1 folds and validating on the remaining fold, rotating K times.", difficulty: "medium" },
        { question: "What does ROC-AUC stand for?", answer: "Receiver Operating Characteristic - Area Under the Curve. It measures a classification model's performance at all classification thresholds.", difficulty: "hard" }
      ],
      quiz: [
        {
          question: "Which of the following is a regression algorithm?",
          options: ["K-Means", "Logistic Regression", "Linear Regression", "Random Forest Classifier"],
          answer: "Linear Regression",
          explanation: "Linear Regression predicts continuous numerical outputs, making it a regression algorithm. Logistic Regression, despite its name, is a classification algorithm.",
          difficulty: "easy"
        },
        {
          question: "Which regularizer adds a penalty equal to the absolute value of the magnitude of coefficients (L1 regularization)?",
          options: ["Ridge", "Lasso", "Elastic Net", "Dropout"],
          answer: "Lasso",
          explanation: "Lasso (Least Absolute Shrinkage and Selection Operator) is L1 regularization. Ridge is L2 regularization (squared magnitude).",
          difficulty: "medium"
        },
        {
          question: "In binary classification, what metric is defined as True Positives divided by (True Positives + False Negatives)?",
          options: ["Precision", "Recall (Sensitivity)", "F1-Score", "Specificity"],
          answer: "Recall (Sensitivity)",
          explanation: "Recall represents the fraction of actual positive instances that were correctly identified by the classifier.",
          difficulty: "medium"
        }
      ],
      trueFalse: [
        { statement: "Unsupervised learning requires target labels to group data points.", answer: false, explanation: "Unsupervised learning works on unlabeled datasets to find patterns, groupings, or clusters." },
        { statement: "A random forest is an ensemble of decision trees.", answer: true, explanation: "Random Forests build multiple decision trees and merge their predictions together (bagging) for better accuracy and stability." },
        { statement: "Adding L2 regularization causes model weights to shrink exactly to zero.", answer: false, explanation: "L2 (Ridge) shrinks weights close to zero but not exactly to zero. L1 (Lasso) drives weights exactly to zero, performing feature selection." }
      ],
      fillBlanks: [
        { question: "The tradeoff between a model's simplification errors and sensitivity to training data fluctuations is the ____ tradeoff.", answer: "bias-variance", hint: "Bias vs..." },
        { question: "An unsupervised learning algorithm that groups data points into K clusters is ____.", answer: "K-Means", hint: "Uses centroids." },
        { question: "The process of scaling features to have a mean of 0 and variance of 1 is called ____.", answer: "standardization", hint: "Subtract mean, divide by standard deviation." },
        { question: "Evaluating models by rotating training and validation splits is called ____.", answer: "cross-validation", hint: "Splitting into K folds." }
      ],
      shortQuestions: [
        { question: "Explain the difference between classification and regression.", sampleAnswer: "Classification predicts discrete categorical labels (e.g., Spam vs. Not Spam). Regression predicts continuous numerical values (e.g., predicting house prices).", points: 5 }
      ],
      keyConcepts: [
        { term: "Confusion Matrix", definition: "A table summarizing classification performance showing True Positives, False Positives, True Negatives, and False Negatives.", example: "Used to compute Precision and Recall.", difficulty: "medium" }
      ],
      revisionNotes: [
        "Supervised vs Unsupervised vs Reinforcement learning.",
        "Evaluation: Mean Squared Error (Regression), Accuracy, Precision, Recall, F1 (Classification).",
        "Overfitting (high variance, low bias) vs Underfitting (low variance, high bias).",
        "Prevention of overfitting: Cross-validation, regularization, pruning, dropout.",
        "L1 regularization (Lasso) drives weights to 0; L2 regularization (Ridge) shrinks weights."
      ],
      studyTips: ["Draw the bias-variance curve to visualize underfitting and overfitting thresholds."]
    };
  }

  // 4. Ramayan / Epic Preset
  if (
    lowerText.includes('ramayan') ||
    lowerText.includes('ramayana') ||
    lowerText.includes('rama') ||
    lowerText.includes('sita') ||
    lowerText.includes('ayodhya')
  ) {
    return {
      title: "Ramayana: Ancient Epic & Key Concepts",
      summary: "The Ramayana is one of the most important ancient Indian epics, depicting the duties of relationships and portraying ideal characters like Rama, Sita, Lakshmana, and Hanuman.",
      detailedSummary: "Attributed to the sage Valmiki, the Ramayana narrates the life journey of Prince Rama of Ayodhya, his 14-year exile to the forest accompanied by his wife Sita and brother Lakshmana, the abduction of Sita by King Ravana of Lanka, and the subsequent epic war leading to Rama's victory and return to Ayodhya.",
      keyPoints: [
        "Authored originally by Sage Valmiki in Sanskrit verse.",
        "Prince Rama embodies Dharma (righteousness, truth, and duty).",
        "Sita represents devotion, purity, and steadfast resilience.",
        "Hanuman exemplifies unyielding loyalty, strength, and selfless service.",
        "The epic is divided into seven Kandas (books), spanning from Bala Kanda to Uttara Kanda."
      ],
      importantDefinitions: [
        { term: "Dharma", definition: "Righteous conduct, moral duty, and cosmic order that forms the central theme of the Ramayana." },
        { term: "Valmiki", definition: "The revered ancient sage and Adi Kavi (first poet) who authored the Sanskrit Ramayana." },
        { term: "Ayodhya", definition: "The capital city of the Kosala Kingdom and birth land of Prince Rama." },
        { term: "Lanka", definition: "The island kingdom ruled by Ravana where Sita was held captive." }
      ],
      flashcards: [
        { question: "Who is the traditional author of the Sanskrit Ramayana?", answer: "Sage Valmiki", difficulty: "easy", hint: "Known as the Adi Kavi (First Poet)." },
        { question: "For how many years was Prince Rama exiled to the forest?", answer: "14 Years", difficulty: "easy", hint: "It was a fourteen-year exile." },
        { question: "Who was the demon king of Lanka who abducted Sita?", answer: "Ravana", difficulty: "easy" },
        { question: "Which kingdom was Prince Rama the rightful heir to?", answer: "Ayodhya (Kosala Kingdom)", difficulty: "easy" },
        { question: "Who assisted Rama by building the bridge (Rama Setu) to Lanka?", answer: "The Vanara army led by Sugriva, Nala, and Neel.", difficulty: "medium" },
        { question: "What fundamental ideal does Lord Rama embody in the epic?", answer: "Dharma (Righteous Duty and Truth)", difficulty: "medium" },
        { question: "Which brother accompanied Rama and Sita during their forest exile?", answer: "Lakshmana", difficulty: "easy" },
        { question: "What is the first book of the Ramayana called?", answer: "Bala Kanda", difficulty: "medium" }
      ],
      quiz: [
        {
          question: "Who among the following wrote the original Ramayana in Sanskrit?",
          options: ["Sage Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
          answer: "Sage Valmiki",
          explanation: "Sage Valmiki composed the original Ramayana in Sanskrit, while Tulsidas later composed the Ramcharitmanas in Awadhi.",
          difficulty: "easy"
        },
        {
          question: "What was the name of the king of Ayodhya and father of Lord Rama?",
          options: ["Dasharatha", "Janaka", "Shantanu", "Dhritarashtra"],
          answer: "Dasharatha",
          explanation: "King Dasharatha was the ruler of Ayodhya and father of Rama, Bharata, Lakshmana, and Shatrughna.",
          difficulty: "easy"
        },
        {
          question: "Which magical herb did Hanuman bring to revive Lakshmana during the war?",
          options: ["Sanjeevani Booti", "Tulsipatra", "Soma", "Ashwagandha"],
          answer: "Sanjeevani Booti",
          explanation: "Hanuman flew to Dronagiri mountain to fetch the Sanjeevani herb to heal Lakshmana.",
          difficulty: "medium"
        },
        {
          question: "How many Kandas (books) comprise the Ramayana?",
          options: ["7", "5", "12", "18"],
          answer: "7",
          explanation: "The Ramayana is organized into 7 Kandas starting with Bala Kanda and ending with Uttara Kanda.",
          difficulty: "medium"
        }
      ],
      trueFalse: [
        { statement: "Sage Valmiki is revered as the Adi Kavi (First Poet) of Sanskrit literature.", answer: true, explanation: "Valmiki is traditionally recognized as the first poet for composing the Ramayana in sloka metre." },
        { statement: "Bharata accepted the throne of Ayodhya immediately upon Rama's exile.", answer: false, explanation: "Bharata refused the crown and placed Rama's sandals (Paduka) on the throne, ruling as a regent from Nandigram." },
        { statement: "Lanka was surrounded by an ocean and ruled by King Ravana.", answer: true, explanation: "Ravana ruled Lanka across the southern ocean." },
        { statement: "The Ramayana consists of 18 chapters called Parvas.", answer: false, explanation: "The Ramayana consists of 7 Kandas. 18 Parvas belong to the Mahabharata." }
      ],
      fillBlanks: [
        { question: "The central ethical theme of the Ramayana is ____.", answer: "Dharma", hint: "Righteousness or duty." },
        { question: "Prince Rama was exiled for ____ years.", answer: "14", hint: "A number between 10 and 15." },
        { question: "The monkey king who allied with Rama was ____.", answer: "Sugriva", hint: "Ruler of Kishkindha." },
        { question: "The capital city of King Dasharatha was ____.", answer: "Ayodhya", hint: "Located on the banks of Sarayu river." }
      ],
      shortQuestions: [
        { question: "Explain the significance of Lord Rama's adherence to Dharma in the Ramayana.", sampleAnswer: "Prince Rama demonstrates Maryada Purushottama (the ideal human) by upholding moral duty, honoring his father's vow, and placing truth and righteousness above personal comfort.", points: 5 },
        { question: "Describe the role of Hanuman in locating Sita and supporting Rama's mission.", sampleAnswer: "Hanuman crossed the ocean to Lanka, discovered Sita in Ashoka Vatika, delivered Rama's message and ring, brought back news to Rama, and displayed immense strength and devotion throughout the war.", points: 5 },
        { question: "What lessons can be learned from the relationship between Rama, Lakshmana, and Bharata?", sampleAnswer: "Their relationships highlight brotherhood, selfless devotion, and duty. Lakshmana sacrificed comfort to accompany Rama into exile, while Bharata refused to usurp the throne and governed as a regent on Rama's behalf.", points: 5 },
        { question: "Who composed the original Sanskrit Ramayana, and what is its literary structure?", sampleAnswer: "The original Ramayana was composed by Sage Valmiki in Sanskrit verse. It consists of approximately 24,000 verses organized into seven distinct books or Kandas.", points: 5 },
        { question: "Explain the symbolic conflict between Rama and Ravana.", sampleAnswer: "The war between Rama and Ravana symbolizes the eternal struggle between Dharma (righteousness, humility, and moral order) and Adharma (ego, arrogance, and unrighteous desire).", points: 5 },
        { question: "What is the importance of Sita's character in the Ramayana?", sampleAnswer: "Sita embodies virtue, purity, inner strength, and steadfast loyalty. Her resilience during adversity in Lanka makes her an enduring symbol of devotion and dignity.", points: 5 },
        { question: "How does King Dasharatha's promise to Kaikeyi lead to the exile of Rama?", sampleAnswer: "Kaikeyi demanded the fulfillment of two boons previously promised by Dasharatha: crowning her son Bharata as king and exiling Rama to the forest for 14 years. Honor-bound, Dasharatha fulfilled the promises.", points: 5 },
        { question: "What was the role of the Vanara army and Nala-Neel in the conquest of Lanka?", sampleAnswer: "The Vanara army led by Sugriva provided military support, while engineers Nala and Neel constructed the ocean bridge (Rama Setu) allowing the army to cross over to Lanka.", points: 5 },
        { question: "Name the seven Kandas (books) of the Ramayana in sequence.", sampleAnswer: "1. Bala Kanda, 2. Ayodhya Kanda, 3. Aranya Kanda, 4. Kishkindha Kanda, 5. Sundara Kanda, 6. Yuddha Kanda, 7. Uttara Kanda.", points: 5 },
        { question: "Why is the Ramayana considered a timeless guide for human ethics and conduct?", sampleAnswer: "Because it portrays human relationships, duties of rulers, ideal family values, and the ultimate triumph of truth over deception across all situations.", points: 5 }
      ],
      keyConcepts: [
        { term: "Maryada Purushottama", definition: "The supreme ideal man who strictly abides by social norms, truth, and righteous duty.", example: "Exemplified by Lord Rama.", difficulty: "easy" },
        { term: "Bhakti", definition: "Devotion, love, and loyalty towards righteousness and the divine.", example: "Exemplified by Hanuman's devotion to Rama.", difficulty: "easy" }
      ],
      revisionNotes: [
        "Ramayana author: Sage Valmiki (Sanskrit).",
        "7 Kandas: Bala, Ayodhya, Aranya, Kishkindha, Sundara, Yuddha, Uttara Kanda.",
        "Key characters: Rama, Sita, Lakshmana, Hanuman, Ravana, Dasharatha, Bharata, Sugriva.",
        "Core message: Victory of Dharma (righteousness) over Adharma (unrighteousness)."
      ]
    };
  }

  // 5. Mahabharata Preset
  if (
    lowerText.includes('mahabharat') ||
    lowerText.includes('mahabharata') ||
    lowerText.includes('mahabhart') ||
    lowerText.includes('pandava') ||
    lowerText.includes('kaurava') ||
    lowerText.includes('bhagavad gita') ||
    lowerText.includes('kurukshetra') ||
    lowerText.includes('yudhishthira') ||
    lowerText.includes('duryodhana')
  ) {
    return {
      title: "Mahabharata: Ancient Epic & Key Concepts",
      summary: "The Mahabharata is one of the greatest ancient Indian epics, chronicling the dynastic struggle and war between the Pandavas and Kauravas, and containing sacred scriptures like the Bhagavad Gita.",
      detailedSummary: "Composed by Sage Vyasa, the Mahabharata spans 18 Parvas (books) and over 100,000 verses. It depicts the ethical, political, and spiritual conflict over the kingdom of Hastinapura. Central to the epic is the Bhagavad Gita, where Lord Krishna imparts profound spiritual guidance to Prince Arjuna on the battlefield of Kurukshetra.",
      keyPoints: [
        "Authored originally by Sage Vyasa in Sanskrit verse.",
        "Narrates the epic Kurukshetra War between the 5 Pandava brothers and 100 Kaurava brothers.",
        "Contains the Bhagavad Gita (in the Bhishma Parva), a central philosophical text on Dharma and Karma.",
        "Key characters include Yudhishthira, Bhima, Arjuna, Nakula, Sahadeva, Duryodhana, Bhishma, Drona, Karna, and Draupadi.",
        "Divided into 18 Parvas (books), exploring human ethics, duty, righteousness, and cosmic destiny."
      ],
      importantDefinitions: [
        { term: "Bhagavad Gita", definition: "A 700-verse sacred Hindu scripture forming part of the Mahabharata, presenting a dialogue between Lord Krishna and Arjuna." },
        { term: "Vyasa", definition: "The revered ancient sage traditionally recognized as the author and compiler of the Mahabharata." },
        { term: "Hastinapura", definition: "The ancestral capital kingdom of the Kuru dynasty over which the Kurukshetra war was fought." },
        { term: "Dharma", definition: "Moral duty, righteousness, and cosmic order that serves as the moral core of the epic." }
      ],
      flashcards: [
        { question: "Who is the traditional author of the Mahabharata?", answer: "Sage Vyasa", difficulty: "easy", hint: "Also compiled the Vedas." },
        { question: "How many Pandava brothers were there in the Mahabharata?", answer: "5 Brothers (Yudhishthira, Bhima, Arjuna, Nakula, Sahadeva)", difficulty: "easy" },
        { question: "Which sacred text is contained within the Bhishma Parva of the Mahabharata?", answer: "The Bhagavad Gita", difficulty: "easy" },
        { question: "Where was the epic war of the Mahabharata fought?", answer: "Kurukshetra", difficulty: "easy" },
        { question: "Who served as Arjuna's charioteer and guide during the Kurukshetra War?", answer: "Lord Krishna", difficulty: "easy" },
        { question: "How many books (Parvas) make up the Mahabharata?", answer: "18 Parvas", difficulty: "medium" },
        { question: "Who was the eldest brother among the Kauravas?", answer: "Duryodhana", difficulty: "easy" },
        { question: "What fundamental philosophical concept does Lord Krishna teach Arjuna in the Gita?", answer: "Nishkama Karma (performing duty without attachment to results)", difficulty: "medium" }
      ],
      quiz: [
        {
          question: "Who among the following was the author of the Mahabharata?",
          options: ["Sage Vyasa", "Valmiki", "Kalidasa", "Tulsidas"],
          answer: "Sage Vyasa",
          explanation: "Sage Vyasa (Krishna Dvaipayana) composed the Mahabharata in Sanskrit verse.",
          difficulty: "easy"
        },
        {
          question: "In which battlefield was the Mahabharata war fought?",
          options: ["Kurukshetra", "Panipat", "Pataliputra", "Ayodhya"],
          answer: "Kurukshetra",
          explanation: "The 18-day war between the Pandavas and Kauravas took place at Kurukshetra.",
          difficulty: "easy"
        },
        {
          question: "How many verses (slokas) does the full Mahabharata contain approximately?",
          options: ["Over 100,000", "24,000", "10,000", "5,000"],
          answer: "Over 100,000",
          explanation: "The Mahabharata is one of the longest epic poems in human history, containing over 100,000 slokas.",
          difficulty: "medium"
        }
      ],
      trueFalse: [
        { statement: "The Bhagavad Gita is a standalone text unrelated to the Mahabharata.", answer: false, explanation: "The Bhagavad Gita is an integral 700-verse section located inside the Bhishma Parva of the Mahabharata." },
        { statement: "Sage Vyasa is credited with composing the Mahabharata.", answer: true, explanation: "Vyasa composed the epic and Lord Ganesha recorded it." }
      ],
      fillBlanks: [
        { question: "The author of the Mahabharata is Sage ____.", answer: "Vyasa", hint: "Starts with V." },
        { question: "Lord Krishna gave the discourse of the Bhagavad Gita to ____.", answer: "Arjuna", hint: "The master archer Pandava." }
      ],
      shortQuestions: [
        { question: "Explain the main cause and ethical conflict leading to the Kurukshetra War.", sampleAnswer: "The Kurukshetra War arose from the refusal of Duryodhana and the Kauravas to give the Pandavas their rightful share of the kingdom of Hastinapura, leading to a war between righteousness (Dharma) and greed (Adharma).", points: 5 },
        { question: "What is the central message of the Bhagavad Gita regarding duty and action?", sampleAnswer: "Lord Krishna teaches Nishkama Karma—performing one's moral duty selflessly without being attached to the fruits or outcomes of action.", points: 5 }
      ],
      keyConcepts: [
        { term: "Nishkama Karma", definition: "Selfless action performed for duty and righteousness without attachment to personal gain.", example: "Taught by Krishna in the Bhagavad Gita.", difficulty: "medium" },
        { term: "18 Parvas", definition: "The eighteen books structuring the Mahabharata from Adi Parva to Svargarohana Parva.", example: "Bhishma Parva contains the Bhagavad Gita.", difficulty: "medium" }
      ],
      revisionNotes: [
        "Author: Sage Vyasa (recorded by Lord Ganesha).",
        "Structure: 18 Parvas, >100,000 slokas.",
        "Key text: Bhagavad Gita (700 verses, Bhishma Parva).",
        "Pandavas (5): Yudhishthira, Bhima, Arjuna, Nakula, Sahadeva.",
        "Kauravas (100): Led by Duryodhana & King Dhritarashtra.",
        "Central theme: Dharma (righteousness) vs Adharma (unrighteousness)."
      ]
    };
  }

  // 6. Dynamic Topic Fallback Generator (Customized strictly to user input topic/prompt)
  const firstLine = text.split('\n')[0].replace(/^notes:?/i, '').replace(/^topic:?/i, '').trim()
  const cleanWords = firstLine
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .split(/\s+/)
    .filter(
      (w) =>
        w.length > 2 &&
        ![
          'the', 'and', 'for', 'with', 'this', 'that', 'about', 'related', 'questions', 'question', 'study', 'kit',
          'notes', 'prompt', 'revise', 'topic', 'explain', 'give', 'solution', 'solutions', 'detail', 'details',
          'make', 'create', 'generate', 'summarize', 'summary', 'test', 'prepare', 'help', 'please', 'tell', 'want',
          'like', 'chartgpt', 'chatgpt', 'gemini'
        ].includes(w.toLowerCase())
    )

  const extractedTopic = cleanWords
    .slice(0, 4)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
  const topicTitle = extractedTopic || 'Study Material'

  return {
    title: `${topicTitle}: Key Concepts & Study Guide`,
    summary: `Comprehensive study material and key concepts for ${topicTitle}. This study guide synthesizes foundational principles, key terms, practice questions, and revision notes tailored to help you master this material.`,
    detailedSummary: `This study guide compiles key information regarding ${topicTitle}. It provides structured flashcards, multiple-choice quizzes, fill-in-the-blanks, key concept definitions, and short answer exercises designed for thorough understanding, active recall, and self-assessment.`,
    keyPoints: [
      `Core principles and central themes of ${topicTitle}.`,
      `Key definitions, essential terms, and foundational framework.`,
      `Interactive multiple-choice practice questions and answers for active recall.`,
      `Short answer evaluation exercises to test conceptual comprehension.`,
      `Structured revision notes and quick summary points for rapid exam review.`
    ],
    importantDefinitions: [
      { term: topicTitle, definition: `The primary topic and conceptual framework covered in these study notes.` },
      { term: "Core Principles", definition: `The fundamental rules, theorems, or guidelines governing ${topicTitle}.` },
      { term: "Active Recall", definition: "A learning technique where key concepts are retrieved directly from memory to reinforce long-term storage." }
    ],
    flashcards: [
      { question: `What is the primary definition and purpose of ${topicTitle}?`, answer: `The primary definition and purpose of ${topicTitle} within its subject area.`, difficulty: "easy", hint: `Focus on the core concept of ${topicTitle}.` },
      { question: `Why is ${topicTitle} considered significant?`, answer: `It provides foundational principles, structure, and critical applications in its field.`, difficulty: "medium" },
      { question: `What are the main components that make up ${topicTitle}?`, answer: `The key sub-elements, parameters, or rules governing the topic.`, difficulty: "medium" },
      { question: `How do you apply or analyze ${topicTitle} effectively?`, answer: `By examining inputs, applying fundamental principles, and evaluating outcomes.`, difficulty: "hard" }
    ],
    quiz: [
      {
        question: `Which of the following best describes the main focus of ${topicTitle}?`,
        options: [
          `Understanding the core principles and applications of ${topicTitle}`,
          `Ignoring fundamental rules and boundaries`,
          `Using unverified data without structure`,
          `Random testing without objectives`
        ],
        answer: `Understanding the core principles and applications of ${topicTitle}`,
        explanation: `${topicTitle} provides structured knowledge and key principles essential for mastery.`,
        difficulty: "easy"
      },
      {
        question: `Why is active recall beneficial when studying ${topicTitle}?`,
        options: [
          `It forces the brain to retrieve stored information, strengthening neural connections`,
          `It replaces the need to review key concepts`,
          `It is only useful for basic numerical formulas`,
          `It slows down memory retention`
        ],
        answer: `It forces the brain to retrieve stored information, strengthening neural connections`,
        explanation: `Active recall tests your memory directly, leading to far better retention than passive reading.`,
        difficulty: "medium"
      }
    ],
    trueFalse: [
      { statement: `${topicTitle} requires understanding of its foundational terms and core principles.`, answer: true, explanation: `Mastering foundational terms is essential for understanding advanced concepts in ${topicTitle}.` },
      { statement: `Active testing with flashcards is less effective than passive rereading.`, answer: false, explanation: `Active testing stimulates memory retrieval and provides significantly better retention.` }
    ],
    fillBlanks: [
      { question: `The central theme of this study material is ____.`, answer: topicTitle, hint: `The main subject of your notes.` },
      { question: `Testing memory with questions is known as ____ recall.`, answer: "active", hint: "Opposite of passive." }
    ],
    shortQuestions: [
      { question: `Explain the importance and practical applications of ${topicTitle}.`, sampleAnswer: `Understanding ${topicTitle} provides a solid foundation, enabling analytical problem-solving and application of core principles in real-world scenarios.`, points: 5 }
    ],
    keyConcepts: [
      { term: topicTitle, definition: `The central topic of discussion and study.`, example: `Studying key principles of ${topicTitle}.`, difficulty: "easy" },
      { term: "Foundational Principles", definition: `The underlying rules and concepts forming the basis of the subject.`, example: `Applying key definitions in context.`, difficulty: "medium" }
    ],
    revisionNotes: [
      `Key Topic: ${topicTitle}.`,
      `Focus on understanding foundational definitions and core principles.`,
      `Use active recall with flashcards and quizzes for long-term retention.`,
      `Review key concepts regularly before exams.`
    ]
  };
};

export const getMockStudyData = (notesText) => {
  const res = getRawMockStudyData(notesText);

  // Helper function to pad arrays to desired lengths
  const padArray = (arr, targetLength, generator) => {
    const result = [...(arr || [])];
    let index = 1;
    while (result.length < targetLength) {
      result.push(generator(index++, result.length));
    }
    return result.slice(0, targetLength);
  };

  const rawTitle = res.title || "Study Material";
  const title = rawTitle.split(':')[0].split('&')[0].replace(/foundations|basics|introduction/i, '').trim() || "Study Material";

  // Templates to generate clean, diverse questions and notes dynamically
  const flashcardTemplates = [
    (t) => [`What is the core definition and purpose of ${t}?`, `The primary definition and purpose of ${t} in its respective context.`],
    (t) => [`Why is ${t} considered highly important?`, `It provides critical advantages, efficiency, and foundational features.`],
    (t) => [`What are the main components that make up ${t}?`, `The key sub-elements, layers, or modules that make up the subject.`],
    (t) => [`How do you analyze or apply key principles of ${t}?`, `By configuring inputs, parameters, and understanding core guidelines.`],
    (t) => [`What is a primary real-world application of ${t}?`, `Practical scenarios in research, education, or practice where this is applied.`],
    (t) => [`What happens when fundamental guidelines of ${t} are misapplied?`, `It can cause errors, misconceptions, or incomplete outcomes depending on context.`],
    (t) => [`How does studying ${t} improve critical understanding?`, `By structuring concepts, clarifying definitions, and sharpening active recall.`],
    (t) => [`Who are the primary figures, entities, or elements involved in ${t}?`, `The core subjects, characters, or modules interacting within the framework.`],
    (t) => [`What is the relationship between cause and effect in ${t}?`, `Inputs or initial events transition through logical rules to yield structured outcomes.`],
    (t) => [`Name one key best practice when studying ${t}.`, `Ensure thorough verification of definitions, active testing, and concept reviews.`]
  ];

  const quizTemplates = [
    (t) => ({
      question: `Which of the following describes a key advantage of studying ${t}?`,
      options: ["Improved analytical understanding and retention", "Slower memory retrieval", "Higher probability of confusion", "Increased redundant effort"],
      answer: "Improved analytical understanding and retention",
      explanation: `Mastering ${t} clarifies foundational concepts and boosts long-term memory.`
    }),
    (t) => ({
      question: `What is the primary prerequisite for mastering ${t}?`,
      options: ["Understanding core terms and principles", "Random unformatted notes", "Skipping fundamental definitions", "No prior context is required"],
      answer: "Understanding core terms and principles",
      explanation: `${t} requires clear knowledge of foundational terms to build advanced understanding.`
    })
  ];

  const trueFalseTemplates = [
    (t) => [`Understanding the foundational terms of ${t} is essential for advanced analysis.`, true, `Foundational concepts provide the required building blocks.`],
    (t) => [`Active recall with self-testing is effective when reviewing ${t}.`, true, `Active testing significantly strengthens memory retrieval.`]
  ];

  const fillBlanksTemplates = [
    (t) => [`The central subject of this study guide is ____.`, t, `The main topic.`],
    (t) => [`Reviewing key terms improves long-term ____ of ${t}.`, `retention`, `Memory recall.`]
  ];

  const shortQuestionTemplates = [
    (t) => `What is the core significance and main theme of ${t}?`,
    (t) => `Explain the primary historical or conceptual background of ${t}.`,
    (t) => `What are the key lessons or insights derived from studying ${t}?`,
    (t) => `Describe the major entities, figures, or components associated with ${t}.`,
    (t) => `How does ${t} influence modern understanding and study in its field?`,
    (t) => `What are the most important principles or values highlighted in ${t}?`,
    (t) => `Compare the primary perspectives or interpretations of ${t}.`,
    (t) => `Explain how key events or processes unfold within ${t}.`,
    (t) => `What are the common misconceptions or questions regarding ${t}?`,
    (t) => `Summarize the overall impact, applications, and legacy of ${t}.`
  ];

  const keyConceptsTemplates = [
    (t) => [`Core Concepts`, `The fundamental ideas and underlying principles of ${t}.`, `Key definitions and primary themes.`],
    (t) => [`Analytical Framework`, `Structured approach to evaluating ${t}.`, `Reviewing definitions and practice questions.`]
  ];

  const revisionNotesTemplates = [
    (t) => `${t} serves as a foundational subject in its area of study.`,
    (t) => `Always review core definitions and key terms in ${t}.`,
    (t) => `Active recall testing on ${t} leads to superior long-term memory retention.`
  ];

  res.flashcards = padArray(res.flashcards || [], 20, (idx, total) => {
    const template = flashcardTemplates[total % flashcardTemplates.length];
    const [q, a] = template(title, total);
    return {
      question: q,
      answer: a,
      difficulty: idx % 3 === 0 ? 'easy' : idx % 3 === 1 ? 'medium' : 'hard',
      hint: `Think about the core concepts of ${title}.`
    };
  });

  res.quiz = padArray(res.quiz || [], 20, (idx, total) => {
    const template = quizTemplates[total % quizTemplates.length];
    const qObj = template(title, total);
    return {
      ...qObj,
      difficulty: idx % 3 === 0 ? 'easy' : idx % 3 === 1 ? 'medium' : 'hard'
    };
  });

  res.trueFalse = padArray(res.trueFalse || [], 10, (idx, total) => {
    const template = trueFalseTemplates[total % trueFalseTemplates.length];
    const [statement, answer, explanation] = template(title);
    return { statement, answer, explanation };
  });

  res.fillBlanks = padArray(res.fillBlanks || [], 10, (idx, total) => {
    const template = fillBlanksTemplates[total % fillBlanksTemplates.length];
    const [question, answer, hint] = template(title);
    return { question, answer, hint };
  });

  res.shortQuestions = padArray(res.shortQuestions || [], 10, (idx, total) => {
    const template = shortQuestionTemplates[total % shortQuestionTemplates.length];
    const questionText = template(title);
    return {
      question: questionText,
      sampleAnswer: `Understanding ${title} provides essential insights, structural principles, and foundational knowledge applicable to academic and practical analysis.`,
      points: 5
    };
  });

  res.keyConcepts = padArray(res.keyConcepts || [], 10, (idx, total) => {
    const template = keyConceptsTemplates[total % keyConceptsTemplates.length];
    const [term, definition, example] = template(title);
    return {
      term,
      definition,
      example,
      difficulty: idx % 3 === 0 ? 'easy' : idx % 3 === 1 ? 'medium' : 'hard'
    };
  });

  res.revisionNotes = padArray(res.revisionNotes || [], 10, (idx, total) => {
    const template = revisionNotesTemplates[total % revisionNotesTemplates.length];
    return template(title);
  });

  return res;
};
