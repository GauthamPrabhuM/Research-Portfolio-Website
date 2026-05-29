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
    'I work on efficient and scalable learning over structured, time-evolving data — currently temporal graph neural networks.',
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
  'Graph Machine Learning',
  'Temporal Graph Neural Networks',
  'Efficient & Scalable Training',
  'Representation Learning',
  'ML Systems',
]

// ── Research narrative ────────────────────────────────────────────────────────
// The intellectual core of the site. Written as connected paragraphs so an
// admissions reader sees a trajectory, not a list.
export const NARRATIVE = {
  thesis:
    'A single question runs through my work: how do we learn good representations of complex, structured data efficiently — when that data is high-dimensional, relational, and changing over time?',
  paragraphs: [
    {
      heading: 'Starting from structure',
      body: 'My earliest research was united, in hindsight, by a fascination with structure that classical pipelines throw away. In QuCardio, I asked whether richer feature spaces — quantum kernels and quanvolutional models — could separate cardiovascular signals that classical baselines could not, and they did, by 10–14% on held-out ECG data. In SatelTensor, I went the other direction: using Tucker and CP tensor decompositions to compress high-dimensional satellite stacks while preserving their spatial–temporal structure. Different tools, same instinct — the geometry of the data is the thing worth modeling.',
    },
    {
      heading: 'Learning under real constraints',
      body: 'Working in medical imaging taught me that representation learning is inseparable from its constraints: scarce labels, noisy acquisition, and decisions that carry clinical weight. I built ensemble feature-fusion pipelines for anomaly detection in OCT scans and deep segmentation pipelines for retinal vasculature, where careful preprocessing and uncertainty mattered as much as the model. In parallel, studying vaccine-misinformation spread pushed me toward relational data explicitly — modeling not just text with transformers, but how information propagates across the graph of users who share it.',
    },
    {
      heading: 'Converging on graphs',
      body: 'Those threads converge on graph machine learning. Relational structure, temporal dynamics, and the pressure to learn efficiently from large, irregular data are exactly the difficulties that motivate graph neural networks — and, more sharply, temporal GNNs, where the graph itself evolves. This is where my research now lives: at MiCoSys I study efficient training of TGNNs, targeting memory- and compute-optimized architectures that scale to dynamic graphs with millions of edges. The central tension is that the most expressive temporal models are the least scalable; closing that gap is the problem I want to keep working on.',
    },
    {
      heading: 'Grounded in systems',
      body: 'My engineering work keeps the research honest. At Cisco I build agentic ML systems in production — retrieval, evaluation, and guardrails for LLM-backed agents serving real operational load. It is where I have learned what "scalable" actually costs: latency budgets, data drift, the distance between a benchmark number and a deployed one. I want a PhD that lets me pursue the methods questions with that systems intuition intact.',
    },
  ],
  future:
    'Looking ahead, I want to work on the efficiency frontier of graph and temporal representation learning — training methods, memory-efficient architectures, and principled scaling for dynamic relational data — alongside the systems questions that decide whether those methods reach real use.',
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
    note: 'Quantum kernels and quanvolutional models for ECG classification; 10–14% over classical baselines. MeitY + AWS funded.',
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
    note: 'Transformer classification combined with graph-based propagation modeling over the user-association network.',
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
    note: 'Multimodal NLP + computer-vision pipeline for real-time disaster triage. First author.',
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
    note: 'Deep retinal-vessel segmentation with cryptographic protection for clinical imaging.',
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
    note: 'Survey synthesizing architectures, preprocessing, and benchmarks for retinal vessel segmentation.',
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
    note: 'Tucker / CP decomposition for structure-preserving dimensionality reduction of satellite stacks. First author.',
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
    status: 'Ongoing',
    motivation:
      'The most expressive temporal GNNs are the hardest to scale — memory and compute grow quickly as dynamic graphs reach millions of edges.',
    approach:
      'Investigating memory-efficient, compute-optimized TGNN architectures and training procedures for large-scale, time-evolving graphs with dynamic node features.',
    contribution:
      'Targeting reduced training time and resource use without sacrificing temporal expressiveness — work in progress at MiCoSys Lab.',
    stack: ['PyTorch Geometric', 'DGL', 'CUDA', 'Distributed Training'],
    links: [],
  },
  {
    id: 'qucardio',
    title: 'QuCardio — Quantum ML for Cardiovascular Diagnosis',
    period: '2022 – 2023',
    status: 'Published · IEEE Access',
    motivation:
      'Classical models plateau on ECG-image classification; could quantum feature spaces separate what classical kernels cannot?',
    approach:
      'Implemented QSVC, Pegasos QSVC, and quanvolutional QNNs over ECG image datasets — among the first quantum-ML applications in this clinical setting.',
    contribution:
      'Reached 97% accuracy, 10–14% above classical baselines. MeitY + AWS funded; Grand Finalist among 1,600+ teams.',
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
      'Detecting vaccine misinformation needs more than text — how information moves across the network of users is itself a signal.',
    approach:
      'Combined BERT/XLNet text classification with graph-based propagation modeling over a corpus of 10,000+ posts and their user associations.',
    contribution:
      '>90% classification F1 on benchmark data; an early step into the relational/temporal modeling that anchors my current work.',
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
      'High-dimensional satellite telemetry overwhelms standard pipelines; can we compress it without discarding spatial–temporal structure?',
    approach:
      'Applied Tucker and CP tensor decompositions to satellite image stacks for structure-preserving dimensionality reduction.',
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
      'Efficient training of Temporal Graph Neural Networks under the GraphML paradigm — scalable learning over dynamic, time-evolving graphs.',
      'Designing memory- and compute-optimized TGNN architectures for graphs with millions of edges and dynamic node features.',
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
      'Ensemble feature-fusion for anomaly detection in OCT retinal scans, with color-space feature extraction and tuned augmentation pipelines.',
      'Competitive accuracy on multi-class OCT benchmarks; contributed to a dataset of 3,000+ annotated scans. Presented at the IIT KGP Digital Health Symposium.',
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
      'Quantum ML for cardiovascular detection (QSVC, Pegasos QSVC, QNNs) — up to 97% accuracy, 10–14% over classical baselines.',
      'MeitY (Govt. of India) + AWS funded. Grand Finalist, Global Quantum Ecosystems Hackathon 2022 (top 16 of 1,600+ teams).',
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
      'Deep learning pipelines for retinal vessel segmentation (CLAHE, Gaussian blur, edge detection) over 3,000+ fundus images.',
      'Integrated Diffie–Hellman and AES-256 for secure biomedical imaging at Kasturba Medical College. Published in Springer CCIS.',
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
      'Modeled vaccine-misinformation spread with BERT and XLNet plus graph-based propagation over 10,000+ posts.',
      '>90% classification F1; published in Procedia Computer Science (iCMLDE 2024).',
    ],
  },
] as const

// ── Professional experience (applied research / research-to-production) ───────
export const PROFESSIONAL = {
  summary:
    'Applied ML and ML systems at production scale — where I learned what "scalable" actually costs.',
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
