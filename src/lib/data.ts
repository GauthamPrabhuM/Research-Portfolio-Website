// ============================================================================
//  Content layer — single source of truth for the site.
//  Framed around the research thesis: efficient & scalable learning over
//  complex, structured, and time-evolving data (GraphML / Temporal GNNs).
// ============================================================================

// ── Identity ────────────────────────────────────────────────────────────────
export const PROFILE = {
  name: 'Gautham Manuru Prabhu',
  shortName: 'Gautham M. Prabhu',
  // What I want to be read as, first line of the page.
  headline: 'Machine learning researcher',
  subhead:
    'I work on making graph learning scale. Right now that means the efficiency of temporal graph neural networks — cutting the memory and compute cost of learning on large, constantly changing graphs without giving up the temporal detail that makes those models worth using.',
  currentLine:
    'Research Associate, MiCoSys Lab (San José State University) · Software Engineer 2, AI Acceleration at Cisco',
  location: 'Bengaluru, India',
  email: 'gauthamprabhu9@gmail.com',
  links: {
    github: 'https://github.com/GauthamPrabhuM',
    linkedin: 'https://www.linkedin.com/in/gautham-prabhu-5b2342192/',
    scholar: 'https://scholar.google.com/citations?user=GdnOL2wAAAAJ',
    cv: '/assets/CV.pdf',
  },
  photo: '/assets/me.png',
}

// One-line research interests for the overview chip row.
export const RESEARCH_INTERESTS = [
  'Graph Representation Learning',
  'Temporal & Dynamic Graphs',
  'Efficient & Scalable Deep Learning',
  'Geometric Deep Learning',
  'Machine Learning Systems',
]

// ── Research narrative ────────────────────────────────────────────────────────
// The intellectual core of the site. Written as connected paragraphs so an
// admissions reader sees a trajectory, not a list.
export const NARRATIVE = {
  thesis:
    'One question runs through all my work: how can a model learn faithful representations of data that is high-dimensional, relational, and changing over time — without demanding more computation and memory than we can actually afford? It runs from my early work on quantum kernels and tensor methods to what I do now with temporal graph neural networks, and it ties together the three things I keep coming back to: representation learning, graph machine learning, and the efficiency of the systems that run them.',
  paragraphs: [
    {
      heading: 'Structure as inductive bias',
      body: 'My early research kept coming back to the structure that conventional pipelines throw away. In QuCardio, I asked whether quantum feature maps — which embed inputs into exponentially large Hilbert spaces — could separate ECG-derived signals that classical kernels could not, and found consistent gains over strong classical baselines. SatelTensor came at the same idea from the other side: Tucker and CP decompositions to compress high-dimensional satellite tensors while keeping their spatial–temporal factors intact. Both rested on one belief — that the geometry and low-rank structure of data are worth modeling directly, not flattening away.',
    },
    {
      heading: 'Representation learning under constraints',
      body: 'Later projects taught me that you can\'t separate representation learning from the conditions it runs under — few labels, distribution shift, noisy data, and in clinical work, error costs that aren\'t symmetric. I built ensemble feature-fusion methods for anomaly detection in optical coherence tomography and segmentation pipelines for retinal vasculature, where careful preprocessing and calibration mattered as much as model capacity. Working on vaccine misinformation pushed me toward relational structure head-on: instead of classifying posts in isolation, I modeled how content spreads across the graph of user interactions, pairing transformer text representations with the dynamics of the network underneath.',
    },
    {
      heading: 'Toward graph and temporal learning',
      body: 'All of these threads meet in graph machine learning. Relational dependencies, change over time, and the need to learn efficiently from large, irregular data are exactly what graph neural networks are built for — and even more so temporal GNNs, where the graph itself changes as you go. That is what I work on now at MiCoSys: the efficiency of training temporal GNNs — the memory cost of keeping per-node state, the overhead of sampling temporal neighborhoods, and the trouble of scaling continuous-time models to graphs with millions of interactions. The catch is that the most expressive temporal models tend to be the least scalable, and closing that expressivity–efficiency gap is the problem I most want to spend a PhD on.',
    },
    {
      heading: 'Grounded in systems',
      body: 'My day job feeds this rather than competing with it. At Cisco I build and run machine-learning systems at production scale — retrieval, evaluation, and reliability for LLM-based agents under real load — which has given me a concrete sense of what scalability actually costs: latency and memory budgets, distribution drift, and the gap between a good benchmark number and how a model behaves once it is deployed. I want a PhD that lets me chase the foundational questions in efficient graph learning without losing that systems view.',
    },
  ],
  future:
    'Going forward, I want to work at the efficiency frontier of graph and temporal representation learning: algorithms and architectures that make learning on large, dynamic, relational data actually tractable — memory-efficient state, principled sampling and sparsification, and a clearer theory of how expressivity, scalability, and generalization trade off against each other — along with the systems abstractions to get those methods into real use.',
}

// ── Research questions ────────────────────────────────────────────────────────
// The formal statement of the agenda — numbered, the way a thesis proposal
// would state them. Rendered as a boxed list inside the research statement.
export const RESEARCH_QUESTIONS = [
  {
    id: 'RQ1',
    question:
      'How much per-node memory state do temporal GNNs actually require to retain predictive accuracy on continuous-time dynamic graphs — and can that state be compressed, shared, or recomputed without loss?',
  },
  {
    id: 'RQ2',
    question:
      'Can temporal neighborhood sampling be made principled rather than heuristic — which guarantees on the learned representation survive sparsification of the temporal computation graph?',
  },
  {
    id: 'RQ3',
    question:
      'What is the formal trade-off between temporal expressivity and computational cost? Can the expressivity–efficiency frontier of dynamic graph models be characterized, and where on it do existing architectures sit?',
  },
] as const

// ── News ─────────────────────────────────────────────────────────────────────
// Reverse-chronological, dated, one line each — the canonical academic format.
export const NEWS = [
  {
    date: 'Jun 2026',
    text: 'Preparing applications to PhD programs in computer science (Fall 2027 entry), focused on efficient graph and temporal representation learning.',
  },
  {
    date: 'Aug 2025',
    text: 'Promoted to Software Engineer 2 (AI Acceleration) at Cisco — second promotion in 18 months.',
  },
  {
    date: '2025',
    text: 'Joined the MiCoSys Lab at San José State University as a Research Associate, working with Dr. Saptarishi Sengupta on the efficiency of temporal graph neural networks.',
  },
  {
    date: 'Apr 2024',
    text: 'Our paper on modeling vaccine-misinformation propagation over user-association graphs appeared in Procedia Computer Science (ICMLDE 2023).',
  },
  {
    date: 'Dec 2023',
    text: 'QuCardio — quantum machine learning for cardiovascular detection — published in IEEE Access (Q1). Now at 50+ citations.',
  },
  {
    date: '2023',
    text: 'Presented SatelTensor at the Tensor Computation & Machine Learning Workshop, IISc Bengaluru; selected for the ACM Winter School on Optimization for ML & OR at IIT Goa.',
  },
  {
    date: 'Aug 2023',
    text: 'Completed a deep learning research internship at the Medical Informatics Lab, IIT Kharagpur; presented at the Digital Health Symposium.',
  },
] as const

// ── Talks & presentations ─────────────────────────────────────────────────────
export const TALKS = [
  {
    title: 'SatelTensor: Satellite Data Exploration via Tensor Decomposition',
    venue: 'Tensor Computation & Machine Learning (TCML) Workshop, IISc Bengaluru',
    type: 'Contributed talk',
    year: '2023',
  },
  {
    title: 'Ensemble Feature Fusion for Anomaly Detection in Optical Coherence Tomography',
    venue: 'Digital Health Symposium, IIT Kharagpur',
    type: 'Research presentation',
    year: '2023',
  },
  {
    title: 'QuCardio: A Quantum Ecosystem for Cardiovascular Disease Detection',
    venue: 'Global Quantum Science & Technology Hackathon — Grand Finale',
    type: 'Finalist presentation',
    year: '2022',
  },
  {
    title: 'VIKAS: A Multimodal Framework for Disaster Management',
    venue: 'Smart India Hackathon (NDRF track) — Grand Finale',
    type: 'Finalist presentation',
    year: '2022',
  },
] as const

// ── Publications ─────────────────────────────────────────────────────────────
// `selected` surfaces a paper as a highlighted entry. `role` notes contribution
// where it strengthens the research story.
export const PUBLICATIONS = [
  {
    id: 'qucardio',
    selected: true,
    title:
      'QuCardio: Application of Quantum Machine Learning for Detection of Cardiovascular Diseases',
    authors: [
      'S. Prabhu',
      'S. Gupta',
      'G. M. Prabhu',
      'A. V. Dhanuka',
      'K. V. Bhat',
    ],
    venue: 'IEEE Access',
    venueDetail: 'vol. 11, pp. 136122–136135',
    venueType: 'Journal (Q1)',
    year: 2023,
    note: 'Quantum feature maps and quanvolutional models for ECG classification, yielding consistent gains over matched classical kernel baselines (up to ~14% absolute). Supported by MeitY and AWS.',
    citations: '50+',
    doi: '10.1109/ACCESS.2023.3338145',
    link: 'https://ieeexplore.ieee.org/document/10335179',
    bibtex: `@article{prabhu2023qucardio,
  author  = {Prabhu, S. and Gupta, S. and Prabhu, G. M. and Dhanuka, A. V. and Bhat, K. V.},
  title   = {QuCardio: Application of Quantum Machine Learning for Detection of Cardiovascular Diseases},
  journal = {IEEE Access},
  volume  = {11},
  pages   = {136122--136135},
  year    = {2023},
  doi     = {10.1109/ACCESS.2023.3338145}
}`,
  },
  {
    id: 'vaccine',
    selected: true,
    title:
      'Addressing Vaccine Misinformation on Social Media by Leveraging Transformers and User Association Dynamics',
    authors: [
      'C. Rao',
      'G. M. Prabhu',
      'A. R. Kumar',
      'S. Gupta',
      'N. P. Shetty',
    ],
    venue: 'Procedia Computer Science',
    venueDetail: 'vol. 235, pp. 1803–1813 (ICMLDE 2023)',
    venueType: 'Conference',
    year: 2024,
    note: 'Couples transformer-based text classification with modeling of information propagation over the user-interaction graph, improving detection beyond content-only signals.',
    citations: null,
    doi: '10.1016/j.procs.2024.04.171',
    link: 'https://www.sciencedirect.com/science/article/pii/S1877050924008470',
    bibtex: `@article{rao2024vaccine,
  author  = {Rao, C. and Prabhu, G. M. and Kumar, A. R. and Gupta, S. and Shetty, N. P.},
  title   = {Addressing Vaccine Misinformation on Social Media by Leveraging Transformers and User Association Dynamics},
  journal = {Procedia Computer Science},
  volume  = {235},
  pages   = {1803--1813},
  year    = {2024},
  doi     = {10.1016/j.procs.2024.04.171}
}`,
  },
  {
    id: 'vikas',
    selected: false,
    title: 'VIKAS: A Multimodal Framework to Aid in Effective Disaster Management',
    authors: [
      'G. M. Prabhu',
      'T. Gupta',
      'M. V. Srujan',
      'A. R. Soumya',
      'A. Palorkar',
      'A. Chowdhury',
    ],
    venue: 'Springer CCIS (ATIS 2022)',
    venueDetail: 'vol. 1804',
    venueType: 'Conference',
    year: 2023,
    note: 'A multimodal framework integrating natural-language and visual signals for real-time triage during disaster response. First author.',
    citations: null,
    doi: '10.1007/978-981-99-2264-2_22',
    link: 'https://link.springer.com/chapter/10.1007/978-981-99-2264-2_22',
    bibtex: `@inproceedings{prabhu2023vikas,
  author    = {Prabhu, G. M. and Gupta, T. and Srujan, M. V. and Soumya, A. R. and Palorkar, A. and Chowdhury, A.},
  title     = {VIKAS: A Multimodal Framework to Aid in Effective Disaster Management},
  booktitle = {Applications and Techniques in Information Security (ATIS 2022), CCIS},
  volume    = {1804},
  publisher = {Springer},
  year      = {2023},
  doi       = {10.1007/978-981-99-2264-2_22}
}`,
  },
  {
    id: 'eyeencrypt',
    selected: false,
    title: 'EyeEncrypt: A Cyber-Secured Framework for Retinal Image Segmentation',
    authors: ['G. Hegde', 'S. Gupta', 'G. M. Prabhu', 'S. V. Bhandary'],
    venue: 'Springer CCIS (ATIS 2022)',
    venueDetail: 'vol. 1804',
    venueType: 'Conference',
    year: 2023,
    note: 'Deep retinal-vessel segmentation combined with cryptographic protection of clinical imaging data, addressing accuracy and confidentiality jointly.',
    citations: null,
    doi: '10.1007/978-981-99-2264-2_9',
    link: 'https://link.springer.com/chapter/10.1007/978-981-99-2264-2_9',
    bibtex: `@inproceedings{hegde2023eyeencrypt,
  author    = {Hegde, G. and Gupta, S. and Prabhu, G. M. and Bhandary, S. V.},
  title     = {EyeEncrypt: A Cyber-Secured Framework for Retinal Image Segmentation},
  booktitle = {Applications and Techniques in Information Security (ATIS 2022), CCIS},
  volume    = {1804},
  publisher = {Springer},
  year      = {2023},
  doi       = {10.1007/978-981-99-2264-2_9}
}`,
  },
  {
    id: 'vessel-review',
    selected: false,
    title:
      'A Systematic Review of Deep Learning Approaches for Vessel Segmentation in Retinal Fundus Images',
    authors: ['G. Hegde', 'S. Prabhu', 'S. Gupta', 'G. M. Prabhu', 'et al.'],
    venue: 'IOP J. Physics: Conference Series',
    venueDetail: 'vol. 2571, p. 012021',
    venueType: 'Peer-reviewed',
    year: 2023,
    note: 'A systematic review synthesizing architectures, preprocessing strategies, and evaluation protocols for retinal vessel segmentation.',
    citations: null,
    doi: '10.1088/1742-6596/2571/1/012021',
    link: 'https://iopscience.iop.org/article/10.1088/1742-6596/2571/1/012021',
    bibtex: `@article{hegde2023vesselreview,
  author  = {Hegde, G. and Prabhu, S. and Gupta, S. and Prabhu, G. M. and others},
  title   = {A Systematic Review of Deep Learning Approaches for Vessel Segmentation in Retinal Fundus Images},
  journal = {Journal of Physics: Conference Series},
  volume  = {2571},
  pages   = {012021},
  year    = {2023},
  doi     = {10.1088/1742-6596/2571/1/012021}
}`,
  },
  {
    id: 'sateltensor',
    selected: false,
    title: 'SatelTensor: Satellite Data Exploration via Tensor Decomposition',
    authors: ['G. M. Prabhu', 'S. Gupta'],
    venue: 'TCML Workshop, IISc Bengaluru',
    venueDetail: 'Tensor Computation & ML Workshop',
    venueType: 'Workshop',
    year: 2023,
    note: 'Tucker and CP decompositions for low-rank, structure-preserving representation of high-dimensional satellite imagery. First author.',
    citations: null,
    doi: null,
    link: null,
    bibtex: `@misc{prabhu2023sateltensor,
  author       = {Prabhu, G. M. and Gupta, S.},
  title        = {SatelTensor: Satellite Data Exploration via Tensor Decomposition},
  howpublished = {Tensor Computation \\& Machine Learning Workshop, IISc Bengaluru},
  year         = {2023}
}`,
  },
] as const

// ── Featured research projects ───────────────────────────────────────────────
// Research-framed (motivation / approach / contribution), not product blurbs.
export const PROJECTS = [
  {
    id: 'tgnn',
    title: 'Efficient Training of Temporal Graph Neural Networks',
    period: '2025 – Present',
    status: 'Ongoing · MiCoSys Lab',
    motivation:
      'Temporal GNNs achieve strong predictive performance on dynamic graphs, but their cost scales poorly: maintaining per-node memory state and sampling temporal neighborhoods becomes prohibitive as interactions reach the millions.',
    approach:
      'Studying memory-efficient state representations and training procedures for temporal GNNs, with explicit attention to the trade-off between temporal expressivity and computational/memory cost on large, continuously evolving graphs.',
    contribution:
      'Ongoing work aimed at reducing the training-time and memory footprint of temporal GNNs while preserving predictive accuracy.',
    stack: ['PyTorch Geometric', 'DGL', 'CUDA', 'Distributed Training'],
    links: [],
  },
  {
    id: 'qucardio',
    title: 'QuCardio — Quantum ML for Cardiovascular Diagnosis',
    period: '2022 – 2023',
    status: 'Published · IEEE Access',
    motivation:
      'Classical kernels saturate on certain ECG-derived classification tasks; quantum feature maps offer access to higher-dimensional embedding spaces that may separate otherwise inseparable signals.',
    approach:
      'Implemented and compared QSVC, Pegasos QSVC, and quanvolutional quantum neural networks against matched classical baselines on ECG image data.',
    contribution:
      'Consistent improvements over classical baselines (up to ~14% absolute, 97% accuracy). Published in IEEE Access; supported by MeitY and AWS; Grand Finalist among 1,600+ teams.',
    stack: ['Qiskit', 'Python', 'Quantum ML', 'scikit-learn'],
    links: [
      { label: 'Paper', href: 'https://ieeexplore.ieee.org/document/10335179' },
      {
        label: 'Code',
        href: 'https://github.com/GauthamPrabhuM/Quantum-Ecosystem-for-Efficient-Detection-of-Cardiovascular-Diseases',
      },
    ],
  },
  {
    id: 'misinformation',
    title: 'Misinformation Propagation on User-Association Graphs',
    period: '2022 – 2023',
    status: 'Published · Procedia CS',
    motivation:
      'Detecting misinformation from text alone ignores a strong complementary signal: how content propagates through networks of interacting users.',
    approach:
      'Combined transformer encoders (BERT, XLNet) with graph-based modeling of propagation over the user-interaction network across a corpus of ~10,000 posts.',
    contribution:
      'Improved classification over content-only baselines (F1 > 0.90 on benchmark data); an early step toward the relational and temporal modeling that defines my current work.',
    stack: ['BERT', 'XLNet', 'PyTorch', 'Graph Modeling'],
    links: [
      {
        label: 'Paper',
        href: 'https://www.sciencedirect.com/science/article/pii/S1877050924008470',
      },
    ],
  },
  {
    id: 'sateltensor',
    title: 'SatelTensor — Tensor Decomposition for Satellite Data',
    period: '2023',
    status: 'Presented · TCML, IISc',
    motivation:
      'High-dimensional satellite tensors are costly to process, and naive dimensionality reduction discards the spatial–temporal structure that downstream tasks depend on.',
    approach:
      'Applied Tucker and CP decompositions to obtain low-rank, structure-preserving representations of satellite image stacks.',
    contribution:
      'Demonstrated efficient low-rank representations of spatial–temporal data; presented at the TCML Workshop, IISc Bengaluru.',
    stack: ['Python', 'TensorLy', 'NumPy'],
    links: [],
  },
] as const

// ── Research experience ──────────────────────────────────────────────────────
export const RESEARCH_EXPERIENCE = [
  {
    role: 'Research Associate',
    group: 'MiCoSys Lab — Machine Intelligence & Complex Systems',
    institution: 'San José State University',
    advisor: 'Dr. Saptarishi Sengupta',
    period: '2025 – Present',
    location: 'Remote',
    current: true,
    points: [
      'Studying the efficiency of training temporal graph neural networks — the memory cost of per-node state and the overhead of temporal neighborhood sampling on large, continuously evolving graphs.',
      'Developing memory- and compute-efficient training procedures that target the expressivity–scalability trade-off on dynamic graphs with millions of interactions.',
    ],
  },
  {
    role: 'Deep Learning Research Intern',
    group: 'Medical Informatics Lab',
    institution: 'IIT Kharagpur',
    advisor: 'Dr. Subhamoy Mandal · Ms. Pragya Gupta',
    period: 'Jun 2023 – Aug 2023',
    location: 'Remote',
    current: false,
    points: [
      'Developed ensemble feature-fusion methods for anomaly detection in optical coherence tomography, with color-space feature extraction and calibrated augmentation pipelines.',
      'Achieved competitive accuracy on multi-class OCT benchmarks; contributed to a dataset of 3,000+ annotated scans. Presented at the IIT Kharagpur Digital Health Symposium.',
    ],
  },
  {
    role: 'Undergraduate Researcher',
    group: 'Cybersecurity & Quantum Computing Research Group',
    institution: 'MIT Manipal',
    advisor: 'Dr. Vivekananda Bhat',
    period: 'Feb 2022 – Nov 2023',
    location: 'Manipal, India',
    current: false,
    points: [
      'Investigated quantum machine learning for cardiovascular detection (QSVC, Pegasos QSVC, quanvolutional QNNs), obtaining consistent gains over matched classical kernel baselines (up to ~14% absolute).',
      'Supported by MeitY (Govt. of India) and AWS. Grand Finalist, Global Quantum Ecosystems Hackathon 2022 (top 16 of 1,600+ teams). Published in IEEE Access.',
    ],
  },
  {
    role: 'Undergraduate Research Assistant',
    group: 'Biometrics & Software Engineering Group',
    institution: 'MIT Manipal',
    advisor: 'Dr. Srikanth Prabhu · Mr. Govardhan Hegde',
    period: 'Jul 2022 – Oct 2023',
    location: 'Manipal, India',
    current: false,
    points: [
      'Built deep learning pipelines for retinal vessel segmentation (CLAHE, Gaussian smoothing, edge detection) over 3,000+ fundus images.',
      'Integrated cryptographic protection (Diffie–Hellman, AES-256) for clinical imaging data at Kasturba Medical College. Published in Springer CCIS.',
    ],
  },
  {
    role: 'Undergraduate Researcher',
    group: 'NLP / Social Computing',
    institution: 'MIT Manipal',
    advisor: 'Dr. Nisha P. Shetty',
    period: 'Sep 2022 – Jul 2023',
    location: 'Manipal, India',
    current: false,
    points: [
      'Modeled the diffusion of vaccine misinformation by coupling transformer encoders (BERT, XLNet) with graph-based propagation over a corpus of 10,000+ posts.',
      'Achieved F1 > 0.90 on benchmark data; published in Procedia Computer Science (iCMLDE 2024).',
    ],
  },
] as const

// ── Professional experience (applied research / research-to-production) ───────
export const PROFESSIONAL = {
  summary:
    'Machine-learning systems in production — where the efficiency constraints I care about in research tend to show up first, and loudest.',
  roles: [
    {
      title: 'Software Engineer 2 — AI Acceleration',
      org: 'Cisco Systems',
      team: 'Supply Chain Operations',
      period: 'Aug 2025 – Present',
      current: true,
      points: [
        'Build agentic ML systems (case resolution, knowledge-base indexing, proactive alerts) handling 20% of incoming cases autonomously — 35% lower case volume, 40% lower MTTR, ~5,000 engineer-hours saved per quarter.',
        'Own the research-to-production loop for LLM-backed agents: retrieval quality, evaluation, and guardrails end-to-end.',
        'Designed failure-analysis and predictive-maintenance agents under the Quality Transformation Program across global manufacturing sites.',
      ],
    },
    {
      title: 'Software Engineer 1 → SE Intern',
      org: 'Cisco Systems',
      team: 'Supply Chain Operations',
      period: 'Jan 2024 – Aug 2025',
      current: false,
      points: [
        'Double-promoted in 18 months (Intern → SE1 in 6 months; SE1 → SE2 in 12).',
        'Re-architected legacy failure-analysis workflows into event-driven microservices (FastAPI, Cassandra, Redis on Kubernetes); built ML anomaly-detection over manufacturing telemetry.',
        '2nd Runner-Up, Cisco Intern Case Study Competition — NLP supplier-name standardization across 50,000+ records (100+ entries).',
      ],
    },
  ],
}

// ── Education ────────────────────────────────────────────────────────────────
export const EDUCATION = [
  {
    degree: 'B.Tech, Computer Science & Engineering',
    minor: 'Minor in Big Data Analytics',
    school: 'Manipal Institute of Technology',
    period: '2020 – 2024',
    detail: '8.91 / 10 CGPA · Top 15% of cohort',
  },
]

// ── Achievements & leadership ─────────────────────────────────────────────────
export const ACHIEVEMENTS = [
  {
    group: 'Research Recognition & Competitions',
    items: [
      {
        title: 'Grand Finalist — Global Quantum Science & Technology Hackathon',
        detail: 'Top 16 of 1,600+ teams across 25+ countries (quantum ML).',
        year: '2022',
      },
      {
        title: 'Grand Finalist — Smart India Hackathon (NDRF track)',
        detail: 'Led a team of 6 on VIKAS; top team from 1,000+ national entries.',
        year: '2022',
      },
      {
        title: '2nd Runner-Up — Cisco Intern Case Study Competition',
        detail: 'NLP supplier-name standardization, 50,000+ records, 100+ entries.',
        year: '2024',
      },
    ],
  },
  {
    group: 'Scholarships & Honors',
    items: [
      {
        title: 'NTSE State Scholar',
        detail: 'National Talent Search Examination — Rank 21 of 151,000+.',
        year: '2018',
      },
      {
        title: 'Thayil Lonappan George Memorial Endowment Award',
        detail: '3rd rank, All India Senior School Certificate Examination.',
        year: '2020',
      },
    ],
  },
  {
    group: 'Selected Schools & Programmes',
    items: [
      {
        title: 'ACM Winter School — Optimization for ML & OR',
        detail: 'Selected participant, IIT Goa.',
        year: '2023',
      },
      {
        title: 'Summer School — Dynamic Resource Allocation',
        detail: 'Center for Networked Intelligence, IISc Bengaluru.',
        year: '2023',
      },
    ],
  },
  {
    group: 'Leadership',
    items: [
      {
        title: 'Co-founder & Technical Head — Project Kalpana',
        detail: 'Secured a $13,000 grant; led 8 on an affordable radio-astronomy platform.',
        year: '2022–23',
      },
      {
        title: 'General Secretary & Treasurer — ACM Student Chapter, Manipal',
        detail: 'Ran 12+ workshops and hackathons; grew participation 35%.',
        year: '2022–23',
      },
    ],
  },
]

// ── Methods & tooling (compact, supporting only) ─────────────────────────────
export const METHODS = [
  {
    label: 'Research methods',
    items: [
      'Graph Neural Networks',
      'Temporal Graphs',
      'Representation Learning',
      'Tensor Decomposition',
      'Quantum ML',
      'Transformers / NLP',
      'Computer Vision',
    ],
  },
  {
    label: 'Frameworks',
    items: ['PyTorch', 'PyTorch Geometric', 'DGL', 'TensorFlow', 'Qiskit', 'scikit-learn'],
  },
  {
    label: 'Systems & tooling',
    items: ['Python', 'C++', 'CUDA', 'FastAPI', 'Docker', 'Kubernetes', 'Distributed Training'],
  },
]

// ── Navigation ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { href: '#news', label: 'News' },
  { href: '#research', label: 'Research' },
  { href: '#publications', label: 'Publications' },
  { href: '#talks', label: 'Talks' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
]

// Compact scholarly metrics shown beneath the hero — kept factual.
export const HERO_STATS = [
  { value: '6', label: 'peer-reviewed publications' },
  { value: '50+', label: 'citations (Google Scholar)' },
  { value: '2', label: 'first-author papers' },
  { value: '4', label: 'research groups · 3 institutions' },
] as const
