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
    'I study scalable representation learning on graphs. My current work concerns the efficiency of temporal graph neural networks — reducing the memory and computational cost of learning on large, dynamically evolving graphs without sacrificing temporal expressivity.',
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
    'My research is organized around a single question: how can models learn faithful representations of structured data — high-dimensional, relational, and evolving in time — under realistic constraints on computation and memory? This question sits at the intersection of representation learning, graph machine learning, and systems efficiency, and it connects my early work on quantum kernels and tensor methods to my present focus on temporal graph neural networks.',
  paragraphs: [
    {
      heading: 'Structure as inductive bias',
      body: 'My early research was unified by an interest in the structure that conventional pipelines discard. In QuCardio, I investigated whether quantum feature maps — which embed inputs into exponentially large Hilbert spaces — could induce class separations on ECG-derived signals that classical kernels could not, obtaining consistent gains over strong classical baselines. In SatelTensor, I took the complementary view, applying Tucker and CP decompositions to compress high-dimensional satellite tensors while preserving their latent spatial–temporal factors. The two projects approached one premise from opposite directions: that the geometry and low-rank structure of data are objects to be modeled explicitly, not nuisances to be flattened away.',
    },
    {
      heading: 'Representation learning under constraints',
      body: 'Later work made clear that representation learning is inseparable from the conditions under which it operates — limited labels, distribution shift, noisy acquisition, and, in clinical settings, asymmetric error costs. I developed ensemble feature-fusion methods for anomaly detection in optical coherence tomography and segmentation pipelines for retinal vasculature, where principled preprocessing and calibration mattered as much as model capacity. Studying the diffusion of vaccine misinformation moved me toward relational structure directly: rather than classifying posts in isolation, I modeled how content propagates over the graph of user interactions, coupling transformer-based text representations with the dynamics of the underlying network.',
    },
    {
      heading: 'Toward graph and temporal learning',
      body: 'These threads converge on graph machine learning. Relational dependencies, temporal evolution, and the imperative to learn efficiently from large, irregular data are precisely the difficulties that motivate graph neural networks — and, more acutely, temporal GNNs, in which the graph itself changes over time. This is the focus of my current research at MiCoSys, where I study the efficiency of training temporal GNNs: the memory cost of maintaining per-node state, the overhead of temporal neighborhood sampling, and the difficulty of scaling continuous-time models to graphs with millions of interactions. The governing tension is that the most expressive temporal models are often the least scalable; characterizing and narrowing this expressivity–efficiency gap is the problem I most want to pursue.',
    },
    {
      heading: 'Grounded in systems',
      body: 'My engineering practice informs this agenda rather than competing with it. At Cisco I build and operate machine-learning systems at production scale — retrieval, evaluation, and reliability for LLM-based agents under real workloads — which has given me a concrete account of what scalability costs in practice: latency and memory budgets, distribution drift, and the distance between benchmark performance and deployed behavior. I am seeking doctoral training that lets me pursue foundational questions in efficient graph learning while keeping this systems perspective.',
    },
  ],
  future:
    'Looking ahead, I aim to work at the efficiency frontier of graph and temporal representation learning: training algorithms and architectures that make learning on large, dynamic, relational data tractable — through memory-efficient state representations, principled sampling and sparsification, and a clearer theoretical account of the trade-offs between expressivity, scalability, and generalization — together with the systems abstractions needed to bring such methods into practice.',
}

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
    'Machine-learning systems in production — where the constraints that motivate my research on efficiency are most directly visible.',
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
  { href: '#research', label: 'Research' },
  { href: '#publications', label: 'Publications' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
]
