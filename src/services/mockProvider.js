// Mock Provider for Offline Demo Mode
const getRawMockStudyData = (notesText) => {
  const text = (notesText || '').trim();
  const lowerText = text.toLowerCase();

  // 1. Photosynthesis Preset
  if (lowerText.includes('photo') || lowerText.includes('synthesis') || lowerText.includes('plant')) {
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
  if (lowerText.includes('operating') || lowerText.includes('system') || lowerText.includes('process') || lowerText.includes('scheduling')) {
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

  // 3. Machine Learning Preset
  if (lowerText.includes('machine') || lowerText.includes('learning') || lowerText.includes('model') || lowerText.includes('algorithm')) {
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

  // 4. Generic Fallback Study Kit
  const topicName = text.slice(0, 50) || "Study Material";
  return {
    title: `Study Kit: ${topicName}...`,
    summary: `This study kit is generated in Demo Mode from your notes. It provides offline study cards, key points, and quizzes to help you learn this topic.`,
    detailedSummary: `Demo Mode allows you to explore the AI Study Assistant dashboard without requiring active Google Gemini or OpenAI API keys. The generated materials are structured to demonstrate the features of flashcards, quizzes, key concepts, fill-in-the-blanks, and revision sheets.`,
    keyPoints: [
      "Generated instant study kit offline in Demo Mode.",
      "Review definitions and study cards on the sidebar.",
      "Take the interactive multiple-choice quiz.",
      "Fill in the blanks to test your term recall.",
      "Self-rate your short answer question responses."
    ],
    importantDefinitions: [
      { term: "Demo Mode", definition: "An offline simulation mode that runs instantly without external API dependencies." },
      { term: "Study Assistant", definition: "An educational application designed to convert raw notes into interactive study materials." }
    ],
    flashcards: [
      { question: "What mode is this study kit running in?", answer: "Demo Mode (Offline).", difficulty: "easy", hint: "No API key is used." },
      { question: "How do you navigate sections in the dashboard?", answer: "Use the sidebar links on desktop or the navigation button on mobile.", difficulty: "easy" },
      { question: "What is the benefit of using study kits?", answer: "They organize raw information into quizzes, flashcards, and summaries for active recall.", difficulty: "medium" },
      { question: "How does active recall improve retention?", answer: "By forcing the brain to retrieve information rather than passively reviewing it.", difficulty: "medium" }
    ],
    quiz: [
      {
        question: "Which of the following describes the current application mode?",
        options: ["Live Gemini API Mode", "Offline Demo Mode", "Mock Server Mode", "Database Sync Mode"],
        answer: "Offline Demo Mode",
        explanation: "Since the Gemini API is rate-limited, Demo Mode was loaded to run the program immediately.",
        difficulty: "easy"
      },
      {
        question: "What is the best active learning technique for memorizing terms?",
        options: ["Rereading notes", "Highlighting paragraphs", "Flashcards and active recall testing", "Listening to lectures passive mode"],
        answer: "Flashcards and active recall testing",
        explanation: "Active testing stimulates the brain and reinforces memory connections far better than passive reading.",
        difficulty: "medium"
      }
    ],
    trueFalse: [
      { statement: "Demo Mode requires a billing account to generate study kits.", answer: false, explanation: "Demo Mode runs entirely locally in your browser." },
      { statement: "You can customize the API provider in the settings.", answer: true, explanation: "You can enter your own key in the API Settings modal." }
    ],
    fillBlanks: [
      { question: "The study kit is running in ____ Mode.", answer: "Demo", hint: "Starts with D." },
      { question: "Active recall is more effective than ____ reading.", answer: "passive", hint: "Opposite of active." }
    ],
    shortQuestions: [
      { question: "Why is it important to test yourself when studying?", sampleAnswer: "Self-testing triggers retrieval practice, which strengthens neural pathways and improves long-term storage of information.", points: 5 }
    ],
    keyConcepts: [
      { term: "Active Recall", definition: "An efficient learning technique where you stimulate memory retrieval during learning.", example: "Testing yourself with flashcards instead of reading text.", difficulty: "easy" },
      { term: "Spaced Repetition", definition: "A learning technique where reviews are spaced out at increasing intervals to combat the forgetting curve.", example: "Reviewing cards after 1 day, then 3 days, then 7 days.", difficulty: "medium" }
    ],
    revisionNotes: [
      "Demo Mode generates instant offline content.",
      "Vite dev server hosts the app.",
      "Zustand manages global state.",
      "Framer Motion provides rich visual animations."
    ],
    studyTips: ["Switch to Gemini or OpenAI in the settings modal to generate custom study materials from your own notes."]
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

  const title = res.title || "Study Material";

  // Templates to generate clean, diverse questions and notes dynamically
  const flashcardTemplates = [
    (t) => [`What is the core definition and purpose of ${t}?`, `The primary definition and purpose of ${t} in its respective context.`],
    (t) => [`Why is ${t} considered highly important?`, `It provides critical advantages, efficiency, and foundational features.`],
    (t) => [`What are the main components that make up ${t}?`, `The key sub-elements, layers, or modules that make up the system.`],
    (t) => [`How do you initialize or start using ${t}?`, `By configuring the required inputs, parameters, and environment settings.`],
    (t) => [`What is a common real-world use case for ${t}?`, `Practical scenarios in industry, software development, or research where this is applied.`],
    (t) => [`What happens if ${t} fails or misbehaves?`, `It can cause resource leaks, incorrect outputs, or system halts depending on the context.`],
    (t) => [`How does ${t} optimize system resources?`, `By scheduling tasks, caching data, or streamlining execution paths.`],
    (t) => [`Who are the primary actors or entities in ${t}?`, `The nodes, modules, or users interacting within the system boundaries.`],
    (t) => [`What is the relationship between inputs and outputs in ${t}?`, `Inputs are processed through logical transitions to yield structured outcomes.`],
    (t) => [`Name one key best practice for working with ${t}.`, `Ensure proper verification, input sanitation, or boundary checks are in place.`]
  ];

  const quizTemplates = [
    (t) => ({
      question: `Which of the following describes a key advantage of ${t}?`,
      options: ["Improved resource optimization", "Slower processing times", "Higher error probability", "Increased manual overhead"],
      answer: "Improved resource optimization",
      explanation: `${t} optimizes workflows and resources, leading to higher performance.`
    }),
    (t) => ({
      question: `What is the primary input required for initializing ${t}?`,
      options: ["Structured configuration parameters", "Random system noise", "An unformatted backup file", "No input is required"],
      answer: "Structured configuration parameters",
      explanation: `${t} requires clear configurations and parameters to set up boundaries correctly.`
    }),
    (t) => ({
      question: `Where does the core execution of ${t} typically take place?`,
      options: ["Inside the main processing context", "On the peripheral storage devices only", "In the user input interface", "In the external network protocol only"],
      answer: "Inside the main processing context",
      explanation: `Core calculations and logic run inside the primary execution context.`
    }),
    (t) => ({
      question: `Which scenario represents a common bottleneck for ${t}?`,
      options: ["Insufficient bandwidth or memory resources", "Having too many optimized paths", "Using modern system hardware", "Regular cache hit occurrences"],
      answer: "Insufficient bandwidth or memory resources",
      explanation: `Like any process, ${t} depends on the availability of CPU, memory, and bandwidth.`
    })
  ];

  const trueFalseTemplates = [
    (t) => [`${t} can run in multi-threaded environments without additional synchronization.`, false, `Synchronization or thread-safety guarantees are usually required.`],
    (t) => [`The main goal of ${t} is to improve system efficiency and active throughput.`, true, `Improving throughput and resource utilization is a core objective.`],
    (t) => [`${t} is completely independent of external libraries or runtime variables.`, false, `Most implementations rely on local configurations, dependencies, or inputs.`],
    (t) => [`Testing and boundary validation are essential steps when implementing ${t}.`, true, `Robust testing prevents runtime crashes and edge-case errors.`],
    (t) => [`${t} consumes more resources than standard implementations in all cases.`, false, `It is designed to be optimized and resource-efficient.`],
    (t) => [`Security permissions are not relevant when configuring ${t}.`, false, `Proper authorization and access control are always recommended.`]
  ];

  const fillBlanksTemplates = [
    (t) => [`The central core of ${t} is managed by the ____.`, `kernel`, `Core component.`],
    (t) => [`Inputs in ${t} are parsed to generate the ____.`, `outputs`, `Resulting items.`],
    (t) => [`To prevent bottlenecks, ${t} utilizes ____ management.`, `resource`, `Think about hardware resources.`],
    (t) => [`The primary architecture of ${t} is based on a ____ design.`, `modular`, `Separate components.`],
    (t) => [`Security protocols in ${t} restrict unauthorized ____.`, `access`, `Keeping it safe.`]
  ];

  const shortQuestionTemplates = [
    (t) => `How does ${t} affect real-world applications and systems?`,
    (t) => `What are the primary factors that influence the performance and efficiency of ${t}?`,
    (t) => `Compare the main advantages and limitations of implementing ${t}.`,
    (t) => `Describe the step-by-step workflow or process execution in ${t}.`,
    (t) => `How can we optimize the parameters associated with ${t}?`,
    (t) => `Explain the underlying theoretical foundations of ${t}.`,
    (t) => `What are the common errors or pitfalls to avoid when working with ${t}?`,
    (t) => `How does ${t} integrate with other related modules or components?`,
    (t) => `What future trends or improvements are expected in the field of ${t}?`,
    (t) => `Provide a brief historical context and the evolution of ${t}.`
  ];

  const keyConceptsTemplates = [
    (t) => [`Core Architecture`, `The underlying design patterns and structures of ${t}.`, `Modular setup with separated layers.`],
    (t) => [`Optimization Flow`, `Techniques to improve latency and resource usage of ${t}.`, `Implementing lazy-loading or caching.`],
    (t) => [`Boundary Conditions`, `Edge cases and input validation rules for ${t}.`, `Handling empty inputs and null checks.`],
    (t) => [`Integration API`, `Interfaces used to connect ${t} with external clients.`, `RESTful endpoints or local function calls.`],
    (t) => [`Lifecycle Stages of ${t}`, `The sequence of states that occur during setup and termination of the system.`, `Initializing state variables followed by garbage collection.`]
  ];

  const revisionNotesTemplates = [
    (t) => `${t} acts as a key component in the modern software stack.`,
    (t) => `Always validate boundary limits and null parameters in ${t}.`,
    (t) => `Optimizing ${t} yields better response times and lower resource use.`,
    (t) => `Key architecture patterns in ${t} include modular encapsulation.`,
    (t) => `Ensure proper error handling is configured for all operations of ${t}.`,
    (t) => `Monitor CPU and memory spikes during heavy throughput phases of ${t}.`,
    (t) => `Test for race conditions when executing ${t} concurrently.`,
    (t) => `Refactor nested loops to improve algorithmic efficiency in ${t}.`
  ];

  res.flashcards = padArray(res.flashcards || [], 20, (idx, total) => {
    const template = flashcardTemplates[total % flashcardTemplates.length];
    const [q, a] = template(title, total);
    return {
      question: q,
      answer: a,
      difficulty: idx % 3 === 0 ? 'easy' : idx % 3 === 1 ? 'medium' : 'hard',
      hint: `Think about the definition/purpose of ${title}.`
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
      sampleAnswer: `The key implication regarding this aspect of ${title} is that it requires proper design patterns and resource utilization.`,
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
