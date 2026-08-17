/* AB-731 — AI Transformation Leader
   Blueprint: "Skills measured as of July 22, 2026"
   Fragen: Englisch (prüfungsnah) · Erklärungen: Deutsch
   t = Fragetyp: "single" | "multi" | "tf"   c = korrekte Indizes */

window.EXAM_AB731 = {
  id: "AB731",
  code: "AB-731",
  title: "AI Transformation Leader",
  short: "Transformation Leader",
  updated: "22. Juli 2026",
  passScore: 700,
  examMinutes: 45,
  examQuestions: 40,
  seatMinutes: 65,
  level: "Beginner",
  blurb: "AI-Strategie für Entscheider: Business Value, Microsoft AI Portfolio, Responsible AI und Adoption.",
  format: [
    ["Prüfungszeit", "45 Minuten"],
    ["Sitzungszeit gesamt", "ca. 65 Minuten inkl. Agreements"],
    ["Bestehensgrenze", "700 von 1000"],
    ["Sprache", "nur Englisch"],
    ["Anbieter", "Pearson VUE — online (OnVUE) oder Testzentrum"],
    ["Microsoft Learn während der Prüfung", "nein (nur bei Associate/Expert)"],
    ["Zurückspringen", "ja — aber nach einer Pause sind frühere Fragen gesperrt"],
    ["Wiederholung", "24 Std. nach dem 1. Versuch, danach 14 Tage"],
    ["Fragetypen", "Multiple Choice, Multiple Response, Drag & Drop, Hot Area, Build List"],
    ["Bewertung Mehrfachantworten", "Teilpunkte — jede korrekte Auswahl zählt einen Punkt"],
    ["Punktabzug", "keiner für falsche Auswahl"],
    ["Labs / Case Studies", "nicht in Beginner-Prüfungen"]
  ],
  learn: {
    title: "Offizieller Lernpfad",
    paths: [
      { n: "Explore the Business Value of Generative AI", u: "https://learn.microsoft.com/training/paths/explore-business-value-generative-ai-solutions/", m: "2 Module — Domain 1" },
      { n: "Drive Business Value with AI Solutions", u: "https://learn.microsoft.com/training/paths/drive-value-generative-ai-solutions/", m: "2 Module — Domain 2" },
      { n: "Transform Your Business with AI", u: "https://learn.microsoft.com/training/paths/transform-your-business-with-microsoft-ai/", m: "4 Module — Domain 3" },
      { n: "Practice Assessment", u: "https://learn.microsoft.com/credentials/certifications/ai-transformation-leader/practice/assessment?assessment-type=practice", m: "Offizieller Übungstest" },
      { n: "Study Guide AB-731", u: "https://learn.microsoft.com/credentials/certifications/resources/study-guides/ab-731", m: "Prüfungsziele im Original" }
    ]
  },

  domains: [
    {
      id: "d1", num: 1, name: "Business Value of Generative AI", weight: "35–40 %", w: 0.375,
      objectives: [
        { id: "1.1", name: "Foundational concepts of generative AI" },
        { id: "1.2", name: "Benefits and capabilities of GenAI solutions" }
      ]
    },
    {
      id: "d2", num: 2, name: "Microsoft AI Apps & Services", weight: "35–40 %", w: 0.375,
      objectives: [
        { id: "2.1", name: "Microsoft 365 Copilot and Microsoft Copilot" },
        { id: "2.2", name: "Foundry Tools" }
      ]
    },
    {
      id: "d3", num: 3, name: "Implementation & Adoption Strategy", weight: "20–25 %", w: 0.225,
      objectives: [
        { id: "3.1", name: "Align AI strategy with responsible AI policies" },
        { id: "3.2", name: "Plan for AI adoption across the organization" }
      ]
    }
  ],

  questions: [

  /* ============ D1 / 1.1 — Foundational concepts ============ */
  {
    id: "731-1101", d: "d1", o: "1.1", t: "single",
    q: "What primarily distinguishes generative AI from traditional predictive machine learning?",
    a: [
      "Predictive ML consistently produces more accurate results than generative AI across all business scenarios.",
      "Generative AI works without any training data, whereas predictive ML depends on large historical datasets.",
      "Generative AI creates new content such as text, images or code, whereas predictive ML outputs a label, class or numeric value.",
      "Generative AI must run on-premises for data protection reasons, whereas predictive ML is a cloud-only capability."
    ],
    c: [2],
    e: "Kernunterschied: Generative AI erzeugt neue Inhalte, klassisches ML klassifiziert oder prognostiziert (Label, Kategorie, Zahl). Beide brauchen Daten, beide laufen in Cloud oder On-Prem."
  },
  {
    id: "731-1102", d: "d1", o: "1.1", t: "single",
    q: "A logistics company wants to forecast next quarter's shipment volumes from ten years of historical data. Which approach is most appropriate?",
    a: [
      "A traditional machine learning regression model",
      "A generative AI chat assistant",
      "A speech-to-text service",
      "An image generation model"
    ],
    c: [0],
    e: "Numerische Prognose aus historischen Zeitreihen ist klassisches ML (Regression/Forecasting), nicht Generative AI. Wichtige Prüfungslogik: das richtige Werkzeug für den Aufgabentyp wählen."
  },
  {
    id: "731-1103", d: "d1", o: "1.1", t: "single",
    q: "A customer service team wants to draft personalized responses to open-ended customer emails at scale. Which AI approach fits best?",
    a: [
      "A clustering algorithm that automatically groups similar enquiries into broad topics",
      "A linear regression model that predicts expected response time",
      "A generative AI solution grounded in the company's knowledge base",
      "An anomaly detection model that flags unusual customer requests"
    ],
    c: [2],
    e: "Freitext individuell erzeugen ist Generative AI. Clustering, Regression und Anomalieerkennung analysieren oder prognostizieren zwar sinnvoll, schreiben aber keine Antworten."
  },
  {
    id: "731-1104", d: "d1", o: "1.1", t: "single",
    q: "During a vendor briefing a colleague asks what is meant by a pretrained model. What is the accurate answer?",
    a: [
      "A model that only works after you provide labelled examples.",
      "A model that runs only on local hardware.",
      "A model that has been trained exclusively on your company's data.",
      "A model trained on broad data and reusable for many tasks."
    ],
    c: [3],
    e: "Pretrained = auf großen, allgemeinen Datenmengen vortrainiert und sofort einsetzbar. Es ist der Standardausgangspunkt, bevor man über Grounding oder Fine-Tuning nachdenkt."
  },
  {
    id: "731-1105", d: "d1", o: "1.1", t: "single",
    q: "Which scenario is the strongest justification for fine-tuning a model instead of using retrieval-augmented generation?",
    a: [
      "Answers must reflect documents that change frequently.",
      "You need the model to cite its sources.",
      "The model must follow a specific internal style and tone.",
      "You want to reduce tokens used during retrieval."
    ],
    c: [2],
    e: "Faustregel: RAG für aktuelles Faktenwissen mit Quellenangabe, Fine-Tuning für Verhalten, Stil, Format und Domänensprache. Täglich wechselnde Inhalte über Fine-Tuning abzubilden wäre teuer und langsam."
  },
  {
    id: "731-1106", d: "d1", o: "1.1", t: "multi",
    q: "Which factors are direct cost drivers in a generative AI solution? (Choose three.)",
    a: [
      "The colour scheme of the user interface",
      "The number of physical printers in the office",
      "The number of input and output tokens processed",
      "The size and capability tier of the model selected",
      "The volume of grounding context sent with each request"
    ],
    c: [2, 3, 4],
    e: "Tokens (Input UND Output), Modellklasse und die Menge an mitgesendetem Kontext bestimmen die Kosten. Deshalb sind Prompt-Design und Retrieval-Qualität auch Kostenhebel, nicht nur Qualitätshebel."
  },
  {
    id: "731-1107", d: "d1", o: "1.1", t: "single",
    q: "Your finance team sees an invoice priced per token and asks what a token actually is. How do you explain it?",
    a: [
      "A security credential that authenticates the application when it calls the model endpoint.",
      "A licence key issued to each user every month that entitles them to a set number of requests.",
      "A unit of text — roughly a word or part of a word — used to measure model input and output.",
      "A hardware component required in the data centre before inference workloads can be executed."
    ],
    c: [2],
    e: "Token = Texteinheit (grob ein Wort oder Wortteil). Abgerechnet werden in der Regel Input- und Output-Tokens. Nicht mit Security-Tokens verwechseln — beliebte Fallstrick-Frage."
  },
  {
    id: "731-1108", d: "d1", o: "1.1", t: "single",
    q: "A CFO asks how to express the ROI of a Copilot deployment. Which formulation is most defensible?",
    a: [
      "The total number of prompts submitted per day across the organization, tracked as a month-on-month growth percentage.",
      "The proportion of purchased licences that have been assigned and activated by employees within the first quarter.",
      "Time saved per user per task, valued at fully loaded cost, minus licence and enablement cost, validated against a measured baseline.",
      "The parameter count and benchmark scores of the underlying model compared with competing foundation models."
    ],
    c: [2],
    e: "ROI braucht eine gemessene Baseline und monetarisierten Nutzen abzüglich Kosten. Die anderen Größen sind Aktivitäts- oder Modellmetriken — sie zeigen Nutzung, aber keinen wirtschaftlichen Ertrag."
  },
  {
    id: "731-1109", d: "d1", o: "1.1", t: "multi",
    q: "Which are recognized challenges of generative AI solutions? (Choose three.)",
    a: [
      "Variability — the same prompt may not produce identical output",
      "A hard requirement for on-premises GPUs in every branch office",
      "Bias reflected from training data",
      "Fabrications — plausible but incorrect output",
      "Inability to process text in any language"
    ],
    c: [0, 2, 3],
    e: "Fabrications, Bias und mangelnde Reproduzierbarkeit sind die klassischen Herausforderungen. Mehrsprachigkeit ist eine Stärke, und lokale GPUs sind bei Cloud-Diensten nicht erforderlich."
  },
  {
    id: "731-1110", d: "d1", o: "1.1", t: "single",
    q: "In which scenario does generative AI provide the clearest business value through scalability?",
    a: [
      "Negotiating and formally signing a single high-value supplier contract once per financial year.",
      "Approving an individual capital expenditure request that arises roughly once a year.",
      "Replacing the accounting ledger that records all statutory financial transactions.",
      "Producing tailored first-draft responses for tens of thousands of inbound enquiries per month."
    ],
    c: [3],
    e: "Business Value entsteht dort, wo hohe Volumina auf repetitive, sprachlastige Arbeit treffen. Einzelne, seltene Entscheidungen bieten kaum Skalierungshebel."
  },
  {
    id: "731-1111", d: "d1", o: "1.1", t: "single",
    q: "Which characteristic makes a business process a GOOD candidate for generative AI automation?",
    a: [
      "It concludes with a legally binding signature that must be given personally by a specific named executive.",
      "It depends entirely on the physical inspection of goods at the point of delivery.",
      "It is high volume, language-intensive and currently done manually following a consistent pattern.",
      "It occurs roughly once every three years as part of a long-cycle strategic review."
    ],
    c: [2],
    e: "Gute Kandidaten: hohes Volumen, sprachlastig, wiederkehrendes Muster, Toleranz für einen Entwurf mit menschlicher Freigabe. Rechtsverbindliche Einzelakte und physische Prüfungen sind schlechte Kandidaten."
  },
  {
    id: "731-1112", d: "d1", o: "1.1", t: "single",
    q: "Which statement about generative AI reliability is correct for a leader planning adoption?",
    a: [
      "Output needs no review once the model has been grounded.",
      "Treat output as a draft requiring risk-appropriate human verification.",
      "Reliability issues can be eliminated by raising the temperature.",
      "Output is deterministic and can serve as the system of record."
    ],
    c: [1],
    e: "Risikoproportionale Verifikation ist das Leitprinzip: niedriges Risiko = leichte Prüfung, hohes Risiko = vollständige menschliche Freigabe. Generative Modelle sind nicht deterministisch."
  },
  {
    id: "731-1113", d: "d1", o: "1.1", t: "single",
    q: "A hiring team notices that an AI screening tool consistently ranks candidates from one demographic lower. What is the most likely root cause?",
    a: [
      "Too few tokens in the prompt",
      "Bias present in the historical training data",
      "The model version being significantly too recent for this scenario",
      "Insufficient network bandwidth"
    ],
    c: [1],
    e: "Modelle reproduzieren Muster ihrer Trainingsdaten. Historisch verzerrte Daten führen zu verzerrten Ergebnissen — Gegenmaßnahmen sind repräsentative Datensätze, Fairness-Tests und menschliche Aufsicht."
  },
  {
    id: "731-1114", d: "d1", o: "1.1", t: "tf",
    q: "Selecting a smaller, less capable model for a simple classification task can be a legitimate way to reduce generative AI running costs.",
    a: ["True", "False"],
    c: [0],
    e: "Richtig. Model-Right-Sizing ist ein zentraler Kostenhebel: das leistungsfähigste Modell ist selten für jede Aufgabe nötig."
  },
  {
    id: "731-1115", d: "d1", o: "1.1", t: "single",
    q: "Which business need is BEST met by a generative AI solution rather than a rules-based automation?",
    a: [
      "Calculating VAT at a fixed statutory rate",
      "Summarizing meeting notes into decisions and risks",
      "Blocking a login after three failed attempts",
      "Sorting a list of numbers"
    ],
    c: [1],
    e: "Unstrukturierte Sprache, Interpretation und Synthese = Generative AI. Deterministische, regelbasierte Logik gehört in klassische Automatisierung — billiger, schneller und nachvollziehbar."
  },

  /* ============ D1 / 1.2 — Benefits & capabilities ============ */
  {
    id: "731-1201", d: "d1", o: "1.2", t: "single",
    q: "What is the primary impact of prompt engineering on a generative AI solution?",
    a: [
      "It lowers the licence requirement because well-written prompts consume fewer seats across the organization.",
      "It significantly improves the relevance, accuracy and usable format of the output without changing the model itself.",
      "It applies an additional encryption layer to the data that is transmitted to the model during inference.",
      "It permanently adapts the underlying model weights so that all future users benefit from the improved instructions too."
    ],
    c: [1],
    e: "Prompt Engineering steuert das Modellverhalten zur Laufzeit, ohne die Gewichte zu verändern — es ist der schnellste und billigste Qualitätshebel. Mit Lizenzierung oder Verschlüsselung hat es nichts zu tun."
  },
  {
    id: "731-1202", d: "d1", o: "1.2", t: "multi",
    q: "Which are established prompt engineering techniques? (Choose four.)",
    a: [
      "Providing a small number of worked examples (few-shot prompting)",
      "Asking the model to reason step by step",
      "Specifying the required output format explicitly",
      "Assigning the model a role or persona",
      "Deliberately removing all context so the model is neutral"
    ],
    c: [0, 1, 2, 3],
    e: "Few-shot, Persona/Rolle, schrittweises Denken und explizite Formatvorgaben sind Standardtechniken. Kontext zu entfernen verschlechtert das Ergebnis systematisch."
  },
  {
    id: "731-1203", d: "d1", o: "1.2", t: "single",
    q: "An architect proposes a RAG approach for your knowledge base. What does that mean in practice?",
    a: [
      "Generating synthetic examples to enlarge a small dataset.",
      "Retrieving relevant content at query time and supplying it as model context.",
      "Compressing a model so it runs locally on a mobile device.",
      "Retraining on company documents nightly to capture changes."
    ],
    c: [1],
    e: "RAG holt zur Anfragezeit relevante Passagen und gibt sie dem Modell als Kontext mit — aktuelle Fakten, zitierbar, berechtigungsgerecht und ohne Retraining. Die anderen Optionen beschreiben Retraining, Quantisierung und Datenaugmentierung."
  },
  {
    id: "731-1204", d: "d1", o: "1.2", t: "multi",
    q: "Which are business requirements for a well-designed grounding solution? (Choose three.)",
    a: [
      "The knowledge source must be publicly accessible on the internet",
      "Responses should be traceable back to their sources",
      "All source documents must be converted to images",
      "Retrieval must respect the requesting user's access permissions",
      "The source content must be authoritative and kept up to date"
    ],
    c: [1, 3, 4],
    e: "Autoritativ und aktuell, berechtigungsgerecht, nachvollziehbar zitierbar — das sind die drei Kernanforderungen an Grounding im Unternehmenskontext."
  },
  {
    id: "731-1205", d: "d1", o: "1.2", t: "single",
    q: "An organization's product documentation changes weekly and answers must cite the exact source page. Which approach is most appropriate?",
    a: [
      "Retrieval-augmented generation over the documentation",
      "Training a model from scratch",
      "Relying on the model's pretrained knowledge",
      "Fine-tuning a model once per year"
    ],
    c: [0],
    e: "Wöchentliche Änderungen plus Zitierpflicht sind das Lehrbuchargument für RAG. Fine-Tuning wäre zu langsam, zu teuer und liefert keine Quellenangaben."
  },
  {
    id: "731-1206", d: "d1", o: "1.2", t: "multi",
    q: "Which aspects of data most strongly affect the quality of an AI solution? (Choose three.)",
    a: [
      "Data quality — accuracy, completeness and consistency",
      "The alphabetical order of the file names",
      "The brand of storage hardware used",
      "Data type — structured versus unstructured and how it is prepared",
      "Whether the dataset is representative of the population it will be used on"
    ],
    c: [0, 3, 4],
    e: "Datenqualität, Repräsentativität und Datentyp/Aufbereitung sind die entscheidenden Faktoren. 'Garbage in, garbage out' gilt bei GenAI genauso wie bei klassischem ML."
  },
  {
    id: "731-1207", d: "d1", o: "1.2", t: "single",
    q: "Why is a representative dataset important?",
    a: [
      "Representative data guarantees that the model will no longer produce fabricated or invented content.",
      "Once the dataset is representative, separate access controls and security reviews are no longer required.",
      "A representative dataset can be compressed more efficiently and therefore lowers storage and transfer costs.",
      "An unrepresentative dataset causes the solution to perform poorly or unfairly for underrepresented groups."
    ],
    c: [3],
    e: "Repräsentativität hängt direkt am RAI-Prinzip Fairness. Sie verhindert weder Halluzinationen noch ersetzt sie Sicherheitskontrollen — beides bleibt unabhängig davon nötig."
  },
  {
    id: "731-1208", d: "d1", o: "1.2", t: "multi",
    q: "Which are security considerations for an enterprise AI system? (Choose three.)",
    a: [
      "Application security, including protection against prompt injection",
      "Ensuring the model has a suitably sized context window",
      "Data security, including encryption and classification of grounding data",
      "Guaranteeing the model stays under a fixed token budget",
      "Authentication and authorization so responses respect user identity"
    ],
    c: [0, 2, 4],
    e: "Anwendungssicherheit, Datensicherheit und Identität/Autorisierung sind die drei Säulen. Kontextfenstergröße und Token-Limits sind Leistungs- und Kostenthemen, keine Sicherheitskontrollen."
  },
  {
    id: "731-1209", d: "d1", o: "1.2", t: "single",
    q: "Why is secure AI a business priority rather than only a technical concern?",
    a: [
      "Tightening security settings measurably improves the creativity and variety of the model's responses.",
      "AI systems process sensitive corporate data, so a breach carries regulatory, financial and reputational consequences.",
      "Regulators now require that all AI models used commercially be published as open source software.",
      "Stronger security configurations reduce the token consumption of each request and therefore lower the overall running costs."
    ],
    c: [1],
    e: "AI-Systeme verarbeiten sensible Unternehmensdaten und bereiten geschäftsrelevante Entscheidungen vor — Vorfälle wirken regulatorisch, finanziell und reputationsseitig. Mit Kosten oder Kreativität hat Sicherheit nichts zu tun."
  },
  {
    id: "731-1210", d: "d1", o: "1.2", t: "single",
    q: "In which scenario does traditional machine learning add more value than generative AI?",
    a: [
      "Detecting fraudulent transactions in real time from structured payment data",
      "Summarizing lengthy research papers into readable executive briefings",
      "Generating original product images for an online catalogue",
      "Drafting personalized marketing emails for many different customer segments at once"
    ],
    c: [0],
    e: "Betrugserkennung auf strukturierten Transaktionsdaten ist ein klassisches ML-Klassifikationsproblem — schneller, günstiger und besser messbar. Die drei anderen Aufgaben erzeugen neue Inhalte und sind damit generativ."
  },
  {
    id: "731-1211", d: "d1", o: "1.2", t: "single",
    q: "Which sequence correctly describes the machine learning solution lifecycle?",
    a: [
      "Train and deploy, then delete data and define the problem.",
      "Deploy, train, define the problem, then prepare data.",
      "Define the problem, prepare data, train, evaluate, deploy, monitor, and retrain.",
      "Prepare data, deploy, define the problem, then monitor."
    ],
    c: [2],
    e: "Der Lifecycle startet immer bei der Geschäftsfrage und endet nicht beim Deployment: Monitoring und Retraining sind Pflichtphasen, weil Modelle über die Zeit abdriften."
  },
  {
    id: "731-1212", d: "d1", o: "1.2", t: "single",
    q: "Why is ongoing monitoring a required phase of the machine learning lifecycle?",
    a: [
      "Deployed models occasionally restart, and monitoring ensures the service is brought back online quickly.",
      "Real-world data changes over time, so model performance degrades and must be detected and corrected.",
      "Continuous monitoring compresses historical training data and thereby reduces long-term storage costs.",
      "Monitoring is required only when an external regulator requests evidence during a formal audit."
    ],
    c: [1],
    e: "Data Drift und Concept Drift sind unvermeidlich — ohne Monitoring merkt man den Qualitätsverfall erst, wenn Entscheidungen bereits darauf beruhen. Es ist keine reine Audit- oder Verfügbarkeitsfrage."
  },
  {
    id: "731-1213", d: "d1", o: "1.2", t: "tf",
    q: "Improving prompt design is generally faster and cheaper than fine-tuning a model to improve output quality.",
    a: ["True", "False"],
    c: [0],
    e: "Richtig. Empfohlene Reihenfolge der Hebel: erst Prompt Engineering, dann Grounding/RAG, und erst wenn beides nicht reicht, Fine-Tuning."
  },

  /* ============ D2 / 2.1 — M365 Copilot and Microsoft Copilot ============ */
  {
    id: "731-2101", d: "d2", o: "2.1", t: "single",
    q: "Which business process is the strongest first candidate for Microsoft 365 Copilot?",
    a: [
      "Real-time control of factory floor robotics where split-second decisions must be made within milliseconds",
      "Meeting follow-up, status reporting and document drafting across a large knowledge-worker population",
      "Payroll calculation and statutory tax filing where every figure must be exact and auditable",
      "Physical warehouse stock counting and reconciliation of goods against delivery paperwork"
    ],
    c: [1],
    e: "M365 Copilot wirkt bei sprachlastiger, wiederkehrender Wissensarbeit in Office-Apps. Echtzeitsteuerung, exakte Regulatorik und physische Tätigkeiten sind keine Copilot-Domänen."
  },
  {
    id: "731-2102", d: "d2", o: "2.1", t: "single",
    q: "What is the key capability difference between Microsoft 365 Copilot and the Copilot Chat included with a Microsoft 365 subscription?",
    a: [
      "Copilot Chat provides the Office app integration, while Microsoft 365 Copilot is a separate standalone web application only.",
      "Microsoft 365 Copilot is Graph-grounded and embedded in Office; Copilot Chat is web-grounded with enterprise data protection.",
      "Both products access organizational data identically; only the number of daily requests and the response speed differ between them.",
      "Copilot Chat is grounded in organizational data through Microsoft Graph, while Microsoft 365 Copilot is limited to publicly available web content."
    ],
    c: [1],
    e: "Work-Grounding über Graph plus In-App-Copilot gibt es nur mit der M365-Copilot-Lizenz. Copilot Chat bietet web-grounded Chat mit Enterprise Data Protection — die Richtung ist genau umgekehrt zu Option 2."
  },
  {
    id: "731-2103", d: "d2", o: "2.1", t: "single",
    q: "A regional manager who works mostly from a phone asks whether Copilot Chat is usable on the road. What applies?",
    a: [
      "It runs on mobile, but data protection applies to the corporate network alone.",
      "It is limited to Windows desktops, so mobile users need a different tool.",
      "It runs on mobile once each user has been assigned an Azure subscription.",
      "It runs on mobile with the same enterprise data protection as on the desktop."
    ],
    c: [3],
    e: "Copilot Chat ist über Web und Mobile verfügbar und bringt Enterprise Data Protection mit. Für Führungskräfte ist das oft der niedrigschwellige Einstiegskanal."
  },
  {
    id: "731-2104", d: "d2", o: "2.1", t: "single",
    q: "A business unit needs a conversational agent that connects to their ERP system, uses branching logic and can be published to a public website. Which product should they use?",
    a: ["Copilot Pages", "Microsoft Copilot Studio", "Microsoft Forms", "Copilot in Word"],
    c: [1],
    e: "Copilot Studio ist die Low-Code-Plattform für eigene Copilots und Agents mit Konnektoren, Topics, Trigger-Logik und Multi-Channel-Publishing."
  },
  {
    id: "731-2105", d: "d2", o: "2.1", t: "single",
    q: "What role does Microsoft Graph play in the Microsoft AI stack?",
    a: [
      "It provides permission-trimmed access to organizational content and signals that ground Copilot's responses.",
      "It meters Copilot usage per individual user and forms the basis for all licence billing and consumption reporting.",
      "It renders the charts, tables and diagrams that Copilot produces inside Excel and PowerPoint.",
      "It is the large language model that generates the text responses users see in Copilot."
    ],
    c: [0],
    e: "Graph ist die Daten- und Signalschicht — Mails, Dateien, Chats, Meetings, Beziehungen, immer berechtigungsgefiltert. Es ist weder Rendering-Engine noch Abrechnungssystem noch das Sprachmodell selbst."
  },
  {
    id: "731-2106", d: "d2", o: "2.1", t: "multi",
    q: "Which benefits arise from an integrated Microsoft AI solution rather than a patchwork of separate tools? (Choose three.)",
    a: [
      "Replacing role-based training with one generic tutorial",
      "Removing the need for human review of AI outputs",
      "Centralized compliance, auditing and data protection controls",
      "Consistent identity and permission enforcement across the estate",
      "Reduced risk of sensitive data being sent to unmanaged third-party services"
    ],
    c: [2, 3, 4],
    e: "Integrierte Lösungen liefern einheitliche Identität, zentrale Compliance und geringeres Shadow-AI-Risiko. Training bleibt trotzdem nötig, und Fehlerfreiheit garantiert niemand."
  },
  {
    id: "731-2107", d: "d2", o: "2.1", t: "single",
    q: "Which risk does providing a sanctioned enterprise AI tool most directly mitigate?",
    a: [
      "Storage capacity being consumed faster than the infrastructure team can provision it",
      "Duplicate documents steadily accumulating across SharePoint sites and personal OneDrive folders",
      "Employees pasting confidential data into unmanaged consumer AI tools outside the tenant",
      "Employees spending excessive working time experimenting with new productivity features"
    ],
    c: [2],
    e: "Shadow AI ist das eigentliche Risiko: Fehlt ein freigegebenes Werkzeug, weichen Mitarbeitende auf private Tools ohne Datenschutzgarantien aus. Ein sanktioniertes Angebot kanalisiert dieses Verhalten."
  },
  {
    id: "731-2108", d: "d2", o: "2.1", t: "single",
    q: "A strategy team needs a multi-step analysis that combines internal documents with public market information and produces a cited report. Which should they use?",
    a: ["Microsoft Forms", "Researcher", "Analyst", "Copilot in Excel"],
    c: [1],
    e: "Researcher = tiefe, mehrstufige Recherche über Work Data und Web mit Quellen. Analyst = Datenanalyse mit Code-Ausführung. Diese Unterscheidung wird explizit geprüft."
  },
  {
    id: "731-2109", d: "d2", o: "2.1", t: "single",
    q: "A finance team has three large raw datasets and needs statistical analysis with visualizations and a transparent calculation trail. Which agent should they use?",
    a: ["Analyst", "Researcher", "Copilot Notebooks", "Copilot in Outlook"],
    c: [0],
    e: "Analyst arbeitet wie ein Data Analyst: iterative Analyse über mehrere Datenquellen, Python-Ausführung und offengelegter Rechenweg."
  },
  {
    id: "731-2110", d: "d2", o: "2.1", t: "single",
    q: "Following a build-buy-extend assessment, which situation most strongly favours 'extend'?",
    a: [
      "The scenario is a one-off analysis that will not be repeated once the current question is answered.",
      "No existing product addresses the scenario, so the capability has to be created from the ground up.",
      "A commercial off-the-shelf product already meets the full requirement without any modification.",
      "Microsoft 365 Copilot covers most of the need, but the remainder requires access to one internal line-of-business system."
    ],
    c: [3],
    e: "Extend heißt: vorhandene Plattform nutzen und gezielt über das Extensibility-Framework ergänzen. Fehlt jede Lösung, ist es Build; deckt ein Produkt alles ab, ist es Buy; ein Einmalfall rechtfertigt gar keine Lösung."
  },
  {
    id: "731-2111", d: "d2", o: "2.1", t: "single",
    q: "Which option best describes the Microsoft 365 Copilot extensibility framework?",
    a: [
      "A set of mechanisms — including agents, connectors and plugins — for bringing your own data and actions into the Copilot experience.",
      "A certification programme for hardware vendors whose devices must fully meet the minimum performance requirements for running Copilot locally.",
      "A volume licensing programme that provides tiered discounts based on the number of Copilot seats an organization purchases.",
      "A migration toolkit for moving mailboxes and SharePoint content into a tenant that has Copilot enabled."
    ],
    c: [0],
    e: "Das Extensibility-Framework bringt eigene Daten und Aktionen in Copilot — über Agents, Konnektoren und Plugins. Es ist weder ein Lizenzmodell noch ein Migrations- oder Hardware-Programm."
  },
  {
    id: "731-2112", d: "d2", o: "2.1", t: "single",
    q: "Which pairing of a business process with the right Microsoft AI capability holds up?",
    a: [
      "Extract invoice fields with a Foundry document capability.",
      "Drafting an email in Outlook → Microsoft Copilot Studio",
      "Extracting structured fields from scanned invoices → Copilot in PowerPoint",
      "Summarizing a Teams meeting → Azure AI Search"
    ],
    c: [0],
    e: "Dokumenten- und Bildverarbeitung im großen Stil gehört zu den Foundry Tools. Meeting-Zusammenfassungen und E-Mail-Entwürfe sind M365-Copilot-Szenarien."
  },
  {
    id: "731-2113", d: "d2", o: "2.1", t: "multi",
    q: "Which Copilot experiences are embedded directly in Microsoft 365 apps? (Choose three.)",
    a: [
      "Copilot in Azure Portal for VM sizing",
      "Copilot in PowerPoint for deck creation",
      "Copilot in Excel for data analysis",
      "Copilot in Teams for meeting recap",
      "Copilot in the SQL query optimizer"
    ],
    c: [1, 2, 3],
    e: "Excel, PowerPoint und Teams gehören zu den M365-Copilot-Erlebnissen. Azure- und Datenbank-Copilots sind andere Produkte in anderen Portalen."
  },
  {
    id: "731-2114", d: "d2", o: "2.1", t: "single",
    q: "A leadership team asks why Copilot answers differ between two employees given the same prompt. What is the correct explanation?",
    a: [
      "Users with an administrative role receive complete answers while others receive summaries.",
      "Copilot varies response quality between users to balance load across the service.",
      "Each user is allocated a different model version depending on when their licence was assigned.",
      "Each response is grounded in the content that the individual user is permitted to access."
    ],
    c: [3],
    e: "Permission-Trimming ist ein Feature, kein Fehler: Grounding erfolgt pro Nutzer über dessen tatsächliche Zugriffsrechte."
  },
  {
    id: "731-2115", d: "d2", o: "2.1", t: "single",
    q: "In Microsoft's build-buy-extend framework, which action corresponds to 'buy'?",
    a: [
      "Adding a custom agent with Copilot Studio.",
      "Fine-tuning your own foundation model.",
      "Developing a bespoke AI application on Microsoft Foundry.",
      "Use preconfigured Microsoft 365 Copilot capabilities."
    ],
    c: [3],
    e: "Microsofts Einteilung: Buy = vorkonfigurierte M365-Copilot-Funktionen nutzen. Extend = mit Agent Builder oder Copilot Studio erweitern. Build = eigene Lösung auf Microsoft Foundry bzw. per SDK entwickeln."
  },

  /* ============ D2 / 2.2 — Foundry Tools ============ */
  {
    id: "731-2201", d: "d2", o: "2.2", t: "single",
    q: "A steering committee asks where Microsoft Foundry sits in the AI portfolio. How do you describe it?",
    a: [
      "A platform for building, evaluating, deploying and governing custom AI applications and agents.",
      "A productivity assistant embedded in Word and Excel that drafts and analyses content for employees.",
      "A licensing portal where administrators assign and manage Microsoft 365 subscriptions.",
      "A device management service that enforces security policies on mobile phones and laptops."
    ],
    c: [0],
    e: "Microsoft Foundry ist die Entwickler- und Plattformebene: Modellauswahl, Prompt-/Agent-Entwicklung, Evaluation, Deployment und Governance. M365 Copilot ist dagegen die fertige Endanwender-Ebene."
  },
  {
    id: "731-2202", d: "d2", o: "2.2", t: "single",
    q: "A retailer wants to automatically extract product attributes from millions of supplier photographs. Which capability is most appropriate?",
    a: [
      "Azure Vision in Foundry Tools",
      "Copilot in Outlook with its attachment handling",
      "Copilot Pages as a collaborative canvas",
      "Microsoft Graph and its content indexing"
    ],
    c: [0],
    e: "Bildanalyse in großem Volumen (Objekterkennung, OCR, Bildbeschreibung) ist der Einsatzbereich von Azure Vision in den Foundry Tools."
  },
  {
    id: "731-2203", d: "d2", o: "2.2", t: "single",
    q: "Which service provides the retrieval layer typically used to implement RAG over an organization's own content?",
    a: ["Azure AI Search", "Azure Backup", "Microsoft Intune", "Microsoft Entra ID"],
    c: [0],
    e: "Azure AI Search liefert Indexierung sowie Vektor-, Schlüsselwort- und Hybrid-Suche mit Security-Trimming — der Standard-Retrieval-Baustein für RAG-Architekturen."
  },
  {
    id: "731-2204", d: "d2", o: "2.2", t: "single",
    q: "When should an organization build on Foundry Tools rather than deploying Microsoft 365 Copilot?",
    a: [
      "When they want to summarize Teams meetings for employees.",
      "When they need to draft emails faster in Outlook.",
      "For a custom AI app embedded in a product or line-of-business system.",
      "When they want Copilot in Word for the finance department."
    ],
    c: [2],
    e: "Faustregel: Standard-Produktivität für Mitarbeitende = M365 Copilot. Kundenspezifische oder in eigene Produkte eingebettete KI = Foundry. Diese Abgrenzung ist eine typische Prüfungsfrage."
  },
  {
    id: "731-2205", d: "d2", o: "2.2", t: "single",
    q: "A business needs to transcribe and translate multilingual customer support calls at scale. Which capability area applies?",
    a: [
      "The data analysis capabilities of Copilot in Excel",
      "Speech and language capabilities in Foundry Tools",
      "The task and project tracking features of Microsoft Planner",
      "The collaborative workspace features of Microsoft Loop"
    ],
    c: [1],
    e: "Speech-to-Text, Übersetzung und Sprachverstehen sind Foundry-Tools-Fähigkeiten, die per API in eigene Prozesse eingebunden werden. Die übrigen Optionen sind Endanwender-Produktivitätswerkzeuge."
  },
  {
    id: "731-2206", d: "d2", o: "2.2", t: "multi",
    q: "Which are stated benefits of Microsoft Foundry and Foundry Tools for an enterprise? (Choose three.)",
    a: [
      "A choice of models that can be matched to the business need",
      "Enterprise security controls including identity, network and data protection",
      "Elastic scalability to handle variable workloads",
      "A guarantee that no human review is ever required",
      "Automatic elimination of all cloud costs"
    ],
    c: [0, 1, 2],
    e: "Skalierbarkeit, Enterprise-Security und Modellauswahl sind die Kernvorteile. Human Review bleibt Pflicht, und Kosten verschwinden nicht — sie werden nur steuerbar."
  },
  {
    id: "731-2207", d: "d2", o: "2.2", t: "single",
    q: "Which criterion should primarily drive the choice of model for a business scenario?",
    a: [
      "The release date, because newer models replace older ones.",
      "Task requirements—modality, quality, latency, and cost—matched to capabilities.",
      "The parameter count, because larger models perform better.",
      "The price per token, because lower prices reduce operating costs."
    ],
    c: [1],
    e: "Model Selection ist eine Abwägung aus Modalität, Qualitätsanspruch, Latenz und Kosten. Weder 'größtes' noch 'billigstes' noch 'neuestes' Modell ist per se die richtige Wahl."
  },
  {
    id: "731-2208", d: "d2", o: "2.2", t: "single",
    q: "An insurance company must process handwritten claim forms and route them automatically. Which combination is most appropriate?",
    a: [
      "A vision or document capability in Foundry Tools to extract the data, plus a workflow to route it",
      "Copilot Notebooks to store the scanned forms so that claims handlers can query them individually later",
      "Microsoft Graph to scan the paper forms and publish the extracted fields to the claims team",
      "Copilot in PowerPoint to convert each scanned claim form into a structured slide deck"
    ],
    c: [0],
    e: "Erst Extraktion über Vision beziehungsweise Document Intelligence, dann Routing per Workflow. Graph liest vorhandene M365-Daten, scannt aber nichts; Copilot-Endanwenderwerkzeuge lösen kein Backend-Szenario."
  },
  {
    id: "731-2209", d: "d2", o: "2.2", t: "single",
    q: "Which statement correctly contrasts Microsoft 365 Copilot with Foundry Tools?",
    a: [
      "Microsoft 365 Copilot requires development work before employees can use it in their daily tasks.",
      "Foundry Tools are intended to replace Microsoft 365 Copilot for knowledge workers over time.",
      "Foundry Tools are aimed at consumer scenarios, while Microsoft 365 Copilot serves commercial organizations.",
      "Microsoft 365 Copilot is ready for employees; Foundry Tools build custom AI solutions."
    ],
    c: [3],
    e: "Fertiges Produkt für Mitarbeitende versus Bausteine für eigene Lösungen — das ist die Portfolio-Trennlinie. Beide bestehen nebeneinander und adressieren unterschiedliche Bedarfe."
  },
  {
    id: "731-2210", d: "d2", o: "2.2", t: "tf",
    q: "Azure AI Search can apply security trimming so that retrieved results respect the requesting user's permissions.",
    a: ["True", "False"],
    c: [0],
    e: "Richtig. Security Trimming im Retrieval ist essenziell — sonst würde eine RAG-Anwendung Inhalte ausspielen, die der Nutzer eigentlich nicht sehen darf."
  },
  {
    id: "731-2211", d: "d2", o: "2.2", t: "single",
    q: "A leader asks which Microsoft capability lets the organization evaluate and compare model outputs before going to production. Where does this belong?",
    a: [
      "The reporting section of the Microsoft 365 admin center",
      "The Copilot conversation history and prompt gallery",
      "The evaluation tooling within Microsoft Foundry",
      "Microsoft Intune with its compliance reporting"
    ],
    c: [2],
    e: "Evaluation und Vergleich von Prompts und Modellen vor dem Go-Live sind Teil der Foundry-Plattform. Sie machen KI-Qualität messbar statt anekdotisch."
  },

  /* ============ D3 / 3.1 — Responsible AI alignment ============ */
  {
    id: "731-3101", d: "d3", o: "3.1", t: "multi",
    q: "Which of the following are Microsoft's Responsible AI principles? (Choose four.)",
    a: [
      "Inclusiveness",
      "Fairness",
      "Transparency",
      "Reliability and safety",
      "Profitability"
    ],
    c: [0, 1, 2, 3],
    e: "Die sechs Microsoft-RAI-Prinzipien: Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency und Accountability. Profitabilität gehört nicht dazu."
  },
  {
    id: "731-3102", d: "d3", o: "3.1", t: "single",
    q: "Which Responsible AI principle is most directly at stake when a loan model performs worse for applicants from a particular region?",
    a: ["Accountability", "Inclusiveness", "Transparency", "Fairness"],
    c: [3],
    e: "Fairness adressiert ungleiche Ergebnisqualität zwischen Gruppen. Inclusiveness zielt auf Zugänglichkeit für alle Menschen, Transparency auf Nachvollziehbarkeit."
  },
  {
    id: "731-3103", d: "d3", o: "3.1", t: "single",
    q: "Which Responsible AI principle requires that people can understand how an AI system reached its output and what its limitations are?",
    a: ["Reliability and safety", "Privacy and security", "Transparency", "Fairness"],
    c: [2],
    e: "Transparency verlangt Verständlichkeit von Funktionsweise, Grenzen und Datenherkunft — Voraussetzung für informierte Nutzung und Vertrauen."
  },
  {
    id: "731-3104", d: "d3", o: "3.1", t: "single",
    q: "Which Responsible AI principle establishes that humans remain answerable for AI systems and their outcomes?",
    a: ["Reliability and safety", "Inclusiveness", "Accountability", "Transparency"],
    c: [2],
    e: "Accountability: Menschen und Organisationen bleiben für KI-Systeme verantwortlich. Das ist die Grundlage für Governance-Strukturen, Rollen und Eskalationswege."
  },
  {
    id: "731-3105", d: "d3", o: "3.1", t: "single",
    q: "What is the primary purpose of establishing an AI council?",
    a: [
      "To provide cross-functional governance, oversight and strategic alignment for AI use across the organization.",
      "To manage procurement of the compute infrastructure and licences required for AI workloads.",
      "To take ownership of building and maintaining the organization's AI applications and integrations.",
      "To assume the decision-making authority of the executive board for all technology investments."
    ],
    c: [0],
    e: "Der AI Council setzt Leitplanken, gibt Use Cases frei und priorisiert — er entwickelt nicht selbst, beschafft nicht und ersetzt keine bestehenden Führungsgremien."
  },
  {
    id: "731-3106", d: "d3", o: "3.1", t: "multi",
    q: "Which functions should typically be represented in an AI governance council? (Choose four.)",
    a: [
      "Legal and compliance",
      "Business unit leadership",
      "Information security",
      "Data privacy",
      "External marketing agencies"
    ],
    c: [0, 1, 2, 3],
    e: "Cross-funktional heißt: Legal/Compliance, Security, Fachbereiche, Datenschutz — plus in der Regel IT und HR. Externe Agenturen gehören nicht in ein Governance-Gremium."
  },
  {
    id: "731-3107", d: "d3", o: "3.1", t: "single",
    q: "Which is the best first governance action before scaling AI across an organization?",
    a: [
      "Ban all AI usage until regulation is finalized.",
      "Let each department negotiate its own AI contracts.",
      "Purchase licences for every employee immediately.",
      "Define acceptable-use principles and an approval path for AI use cases."
    ],
    c: [3],
    e: "Erst Leitplanken und ein Freigabepfad, dann Skalierung. Ein Totalverbot treibt Shadow AI, und dezentrale Einzelverträge verhindern Governance vollständig."
  },
  {
    id: "731-3108", d: "d3", o: "3.1", t: "single",
    q: "How should an organization ensure that an AI solution meets the reliability and safety principle?",
    a: [
      "Increase the number of assigned licences so that more employees can review the output and report problems informally.",
      "Test the system against realistic scenarios, monitor it in production and define human escalation paths for failures.",
      "Publish the model architecture and source code publicly so that external researchers can audit the system for defects.",
      "Reduce logging and telemetry to the minimum so that no sensitive information is retained anywhere in the system."
    ],
    c: [1],
    e: "Reliability & Safety wird über realistische Tests, laufendes Monitoring und definierte Eskalation an Menschen operationalisiert. Weniger Logging würde Monitoring gerade verhindern, und Offenlegung des Codes ersetzt keine Betriebsprozesse."
  },
  {
    id: "731-3109", d: "d3", o: "3.1", t: "single",
    q: "Which Responsible AI principle is most relevant when designing an AI interface for employees with visual impairments?",
    a: ["Fairness", "Inclusiveness", "Accountability", "Privacy and security"],
    c: [1],
    e: "Inclusiveness fordert, dass KI-Systeme für Menschen mit unterschiedlichen Fähigkeiten nutzbar sind — Barrierefreiheit ist hier der zentrale Anwendungsfall."
  },

  /* ============ D3 / 3.2 — Plan for AI adoption ============ */
  {
    id: "731-3201", d: "d3", o: "3.2", t: "multi",
    q: "Which roles typically belong in an AI adoption team? (Choose three.)",
    a: [
      "A change management or adoption lead",
      "IT and security representation",
      "The office facilities manager",
      "An executive sponsor",
      "An external auditor who reviews the accounts annually"
    ],
    c: [0, 1, 3],
    e: "Adoption braucht Sponsorship auf Führungsebene, jemanden für Change/Enablement und IT/Security. Ohne Executive Sponsor scheitern KI-Programme typischerweise an fehlender Priorität."
  },
  {
    id: "731-3202", d: "d3", o: "3.2", t: "multi",
    q: "Which are common barriers to AI adoption in organizations? (Choose three.)",
    a: [
      "Employees not knowing which tasks to apply AI to",
      "Excessive network bandwidth",
      "Too many available training videos",
      "Concerns about data security and privacy",
      "Lack of trust in the accuracy of AI output"
    ],
    c: [0, 3, 4],
    e: "Die typischen Blocker sind Vertrauen, fehlende Anwendungskompetenz ('Was mache ich damit konkret?') und Sicherheits-/Datenschutzbedenken — nicht Infrastruktur."
  },
  {
    id: "731-3203", d: "d3", o: "3.2", t: "single",
    q: "A transformation lead is putting together an AI champions programme. What should it achieve?",
    a: [
      "To limit AI access strictly to senior management until the technology has fully proven itself in the organization.",
      "To replace formal training entirely by relying on informal knowledge sharing between colleagues.",
      "To centralize all AI usage within the IT department so that requests can be handled consistently.",
      "To use trusted peers in each business area to demonstrate practical use cases and support colleagues."
    ],
    c: [3],
    e: "Champions skalieren Adoption über Peer-Vertrauen im eigenen Fachkontext. Sie ergänzen formales Training, statt es zu ersetzen — und sie zentralisieren gerade nicht."
  },
  {
    id: "731-3204", d: "d3", o: "3.2", t: "single",
    q: "Which preparation activity most directly reduces the risk of oversharing when Copilot is deployed?",
    a: [
      "Disabling search indexing entirely across the tenant so that no content can ever be surfaced unintentionally.",
      "Standardizing document file names so that sensitive material is easier to recognize in results.",
      "Increasing the number of Copilot licences so that access patterns are distributed more evenly.",
      "Reviewing and remediating SharePoint and OneDrive permissions, and applying sensitivity labels."
    ],
    c: [3],
    e: "Copilot legt bestehende Über-Berechtigungen offen. Permission-Hygiene und Sensitivity Labels sind die Vorarbeit. Indexierung abzuschalten würde Copilot funktionsunfähig machen, statt das Problem zu lösen."
  },
  {
    id: "731-3205", d: "d3", o: "3.2", t: "multi",
    q: "Which impacts must a leader plan for before broad AI deployment? (Choose four.)",
    a: [
      "The number of parking spaces at head office",
      "Privacy and regulatory obligations",
      "Cost of licences and consumption",
      "Data governance and permission hygiene",
      "Security and identity controls"
    ],
    c: [1, 2, 3, 4],
    e: "Daten, Sicherheit, Datenschutz/Regulatorik und Kosten sind die vier Planungsdimensionen, die der Blueprint explizit nennt."
  },
  {
    id: "731-3206", d: "d3", o: "3.2", t: "single",
    q: "Which Copilot licence model charges based on actual consumption rather than a fixed fee per user?",
    a: ["Monthly per-user subscription", "Included automatically as part of an existing Microsoft 365 subscription", "Pay-as-you-go, billed through Copilot Credits", "Perpetual licence"],
    c: [2],
    e: "Verbrauchsbasierte Abrechnung läuft über Copilot Credits — vor allem für Agents und Erweiterungen aus Copilot Studio. Alternativ gibt es das monatliche Add-on pro Nutzer sowie Copilot Chat, das im M365-Abo enthalten ist."
  },
  {
    id: "731-3207", d: "d3", o: "3.2", t: "single",
    q: "A department wants to pilot agent scenarios with unpredictable usage before committing to per-user licences. Which commercial model fits best?",
    a: [
      "A three-year per-user commitment for the whole company",
      "A perpetual on-premises licence",
      "No licence is required for agents",
      "Pay-as-you-go consumption billing"
    ],
    c: [3],
    e: "Für Pilotphasen mit unklarem Volumen ist verbrauchsbasierte Abrechnung das risikoärmste Modell. Erst wenn sich stabile Nutzung zeigt, lohnt der Wechsel zu festen Nutzerlizenzen."
  },
  {
    id: "731-3208", d: "d3", o: "3.2", t: "single",
    q: "Which subscription models are available for Foundry Tools?",
    a: [
      "Pay-as-you-go and commitment tiers",
      "Per-device licensing only",
      "Completely free of charge for all commercial use cases",
      "Perpetual licences only"
    ],
    c: [0],
    e: "Foundry Tools bieten verbrauchsbasierte Abrechnung (pay-as-you-go) sowie Commitment Tiers, die bei planbar hohem Volumen einen günstigeren Stückpreis ermöglichen."
  },
  {
    id: "731-3209", d: "d3", o: "3.2", t: "single",
    q: "An organization has high, stable and predictable AI workload volumes. Which commercial choice is likely most economical?",
    a: [
      "More Microsoft 365 mailboxes to spread workload across licensed identities.",
      "A commitment tier with a lower unit price for committed usage volume.",
      "Pay-as-you-go billing for each request based on actual consumption.",
      "More powerful end-user devices for some local processing."
    ],
    c: [1],
    e: "Bei stabilem, hohem Volumen senken Commitment Tiers die Stückkosten. Pay-as-you-go bleibt sinnvoll bei schwankendem Bedarf; Postfächer und Endgeräte haben mit AI-Workload-Kosten nichts zu tun."
  },
  {
    id: "731-3210", d: "d3", o: "3.2", t: "single",
    q: "Six months after deployment, licence usage is high but measured productivity gains are unclear. What should the adoption team do first?",
    a: [
      "Extend licences to the remaining employees so that the sample size becomes large enough to measure.",
      "Identify high-value scenarios per role and run targeted enablement against measurable outcomes.",
      "Cancel the licences immediately, since sustained usage without proven benefit cannot be justified.",
      "Move the workload to a different cloud provider whose AI services may deliver better results."
    ],
    c: [1],
    e: "Nutzung ist keine Wirkung. Der Hebel ist rollenspezifisches Scenario-Enablement mit messbaren Zielgrößen — weder Abbruch noch pauschale Ausweitung noch ein Anbieterwechsel adressiert die Ursache."
  },
  {
    id: "731-3211", d: "d3", o: "3.2", t: "tf",
    q: "Executive sponsorship is considered a critical success factor for AI adoption programmes.",
    a: ["True", "False"],
    c: [0],
    e: "Richtig. Ohne sichtbares Sponsorship auf Führungsebene fehlen Priorität, Budget und die kulturelle Erlaubnis, Arbeitsweisen tatsächlich zu verändern."
  },
  {
    id: "731-3212", d: "d3", o: "3.2", t: "single",
    q: "Which metric best demonstrates business impact rather than mere activity?",
    a: [
      "Number of Copilot licences that have been assigned to employees",
      "Total number of prompts submitted across the organization each month",
      "Number of users who have opened the application at least once",
      "Reduction in the average cycle time of a defined business process"
    ],
    c: [3],
    e: "Prompts, Lizenzen und Erstöffnungen sind Aktivitätsmetriken. Business Impact zeigt sich in Prozesskennzahlen wie Durchlaufzeit, Qualität oder Kosten pro Vorgang."
  },

  /* ================= Vertiefung: verifizierte Detailfakten aus dem offiziellen Lernpfad ================= */

  /* ---- D1 / 1.2 ---- */
  {
    id: "731-1214", d: "d1", o: "1.2", t: "single",
    q: "How does Microsoft position grounding in relation to retrieval-augmented generation?",
    a: [
      "Grounding is the overall concept of providing trusted context at inference time; RAG is one method of achieving it.",
      "RAG is the overall concept and grounding is one specific retrieval technique used within a RAG pipeline.",
      "Grounding has superseded RAG, which Microsoft no longer recommends for enterprise scenarios.",
      "They are unrelated approaches that address different stages of the machine learning lifecycle."
    ],
    c: [0],
    e: "Grounding ist der Oberbegriff — dem Modell zur Laufzeit vertrauenswürdigen Kontext mitgeben. RAG ist eine Methode dafür, neben Datei-Uploads und Websuche."
  },
  {
    id: "731-1215", d: "d1", o: "1.2", t: "single",
    q: "Which sequence reflects Microsoft's recommended order when trying to improve output quality?",
    a: [
      "Train a model from scratch, then apply RAG",
      "Fine-tuning first, then prompt engineering, then grounding",
      "Increase model size first, then adjust prompts",
      "Prompt engineering, then grounding/RAG; fine-tune if needed."
    ],
    c: [3],
    e: "Microsoft empfiehlt ausdrücklich, erst Grounding und RAG auszuschöpfen und Fine-Tuning nur einzusetzen, wenn Prompting und Grounding nicht ausreichen — es ist der teuerste und trägste Hebel."
  },

  /* ---- D2 / 2.1 ---- */
  {
    id: "731-2116", d: "d2", o: "2.1", t: "single",
    q: "A business user with no technical background needs a simple agent grounded in a few SharePoint documents. Which tool is designed for them?",
    a: [
      "The agent builder inside Microsoft 365 Copilot",
      "Microsoft Copilot Studio with its low-code designer",
      "The Azure portal using a custom App Service deployment",
      "Microsoft Foundry with the agent development SDK"
    ],
    c: [0],
    e: "Der Agent Builder in M365 Copilot ist der No-Code-Einstieg für Fachanwender: Beschreibung in natürlicher Sprache, bis zu 20 Knowledge-Quellen. Copilot Studio und Foundry richten sich an Power-User beziehungsweise Entwickler."
  },
  {
    id: "731-2117", d: "d2", o: "2.1", t: "multi",
    q: "Which requirements indicate that Microsoft Copilot Studio is needed rather than the in-product agent builder? (Choose three.)",
    a: [
      "The agent must connect to an external line-of-business system through a connector",
      "The agent should answer questions from three SharePoint documents",
      "The agent needs branching logic and automated flows",
      "The agent must be deployed to multiple channels such as a website or Teams",
      "The agent needs a friendly name and an icon"
    ],
    c: [0, 2, 3],
    e: "Konnektoren zu Drittsystemen, Flows mit Verzweigungslogik und Multi-Channel-Deployment sind Copilot-Studio-Merkmale. Einfaches Grounding auf wenige Dokumente schafft der Agent Builder."
  },
  {
    id: "731-2118", d: "d2", o: "2.1", t: "single",
    q: "Which Microsoft tool reports Copilot usage alongside estimated financial savings, helping leaders quantify return on investment?",
    a: [
      "The device compliance reporting in Microsoft Intune",
      "The Azure Cost Management and Billing experience",
      "The usage reports in the SharePoint admin center",
      "The Microsoft Copilot Dashboard in Viva Insights"
    ],
    c: [3],
    e: "Das Copilot Dashboard in Viva Insights liefert Nutzungsmetriken und geschätzte finanzielle Einsparungen. Ergänzend gibt es das Consumption Dashboard für Copilot Credits und den Business Impact Report."
  },
  {
    id: "731-2119", d: "d2", o: "2.1", t: "single",
    q: "A leader wants to see how Copilot Credits are consumed by team and by service. Which report is appropriate?",
    a: [
      "The Consumption Dashboard in Copilot Analytics",
      "The Entra sign-in log",
      "The Teams call quality dashboard",
      "The Microsoft 365 message center"
    ],
    c: [0],
    e: "Das Consumption Dashboard schlüsselt den Copilot-Credits-Verbrauch nach Team, Service und Nutzer auf — die Basis für Kostensteuerung bei verbrauchsbasierten Modellen."
  },
  {
    id: "731-2120", d: "d2", o: "2.1", t: "single",
    q: "Which licence is required for the Researcher and Analyst agents?",
    a: [
      "An Azure subscription only",
      "A standalone Copilot Studio subscription",
      "A Microsoft 365 Copilot add-on licence",
      "Any Microsoft 365 subscription, no add-on needed"
    ],
    c: [2],
    e: "Researcher und Analyst sind Premium-Funktionen und setzen die kostenpflichtige M365-Copilot-Add-on-Lizenz voraus — nicht im kostenfreien Copilot Chat enthalten."
  },
  {
    id: "731-2121", d: "d2", o: "2.1", t: "single",
    q: "An organization on Microsoft 365 Business Standard wants to add full Copilot capability. Which licence applies?",
    a: [
      "No Copilot add-on is offered for Business subscriptions.",
      "Upgrade to Microsoft 365 E5 before adding Copilot.",
      "Azure OpenAI Service under a separate Azure consumption agreement.",
      "Microsoft 365 Copilot Business for Microsoft 365 Business plans."
    ],
    c: [3],
    e: "Microsoft 365 Copilot Business ist das Add-on für Business Basic, Standard, Premium und Apps for Business. Ein Wechsel auf Enterprise-Pläne ist dafür nicht nötig."
  },

  /* ---- D2 / 2.2 ---- */
  {
    id: "731-2212", d: "d2", o: "2.2", t: "single",
    q: "Which name change is reflected in the current Microsoft documentation and exam terminology?",
    a: [
      "Microsoft Foundry replaced Azure AI Studio, while Azure AI Services kept their name.",
      "Azure AI Foundry became Microsoft Foundry; Azure AI Services became Foundry Tools.",
      "Microsoft 365 Copilot was renamed Microsoft Foundry for business users.",
      "Foundry Tools were renamed Azure Cognitive Services for cloud services."
    ],
    c: [1],
    e: "Die Umbenennung ist offiziell dokumentiert: Microsoft Foundry als Plattform, Foundry Tools als Dienste-Familie. Der Study Guide vom 22.07.2026 verwendet durchgängig die neuen Bezeichnungen."
  },
  {
    id: "731-2213", d: "d2", o: "2.2", t: "single",
    q: "Which service kept its original name and was NOT rebranded under the Foundry Tools naming?",
    a: ["Azure AI Search", "Azure Vision", "Azure Language", "Azure Speech"],
    c: [0],
    e: "Azure AI Search heißt weiterhin so. Die anderen Dienste tragen jetzt den Zusatz 'in Foundry Tools' — etwa 'Azure Vision in Foundry Tools'."
  },
  {
    id: "731-2214", d: "d2", o: "2.2", t: "multi",
    q: "Which of the following are current Foundry Tools recommended for new applications? (Choose three.)",
    a: [
      "QnA Maker",
      "Document Intelligence",
      "Content Safety",
      "Language Understanding (LUIS)",
      "Content Understanding"
    ],
    c: [1, 2, 4],
    e: "Document Intelligence, Content Safety und Content Understanding sind aktiv. LUIS, QnA Maker, Anomaly Detector, Content Moderator, Metrics Advisor und Personalizer sind abgekündigt und für neue Anwendungen nicht mehr empfohlen."
  },
  {
    id: "731-2215", d: "d2", o: "2.2", t: "single",
    q: "Which capability would you use to detect harmful or unwanted content in AI-generated output?",
    a: ["Document Intelligence", "Immersive Reader", "Content Safety", "Translator"],
    c: [2],
    e: "Content Safety erkennt unerwünschte Inhalte in Text und Bild — ein zentraler Baustein für den Responsible-AI-Grundsatz Reliability & Safety in produktiven Anwendungen."
  },
  {
    id: "731-2216", d: "d2", o: "2.2", t: "single",
    q: "A team wants to try a Foundry Tool at no cost before committing to a paid tier. Which option exists for most Foundry Tools?",
    a: [
      "Free unlimited production usage",
      "A 30-day money-back guarantee only",
      "There is no free option",
      "A free F0 tier for testing and evaluation"
    ],
    c: [3],
    e: "Die meisten Foundry Tools bieten einen kostenlosen F0-Tier zum Testen. Für den Produktivbetrieb folgen pay-as-you-go oder Commitment Tiers."
  },
  {
    id: "731-2217", d: "d2", o: "2.2", t: "single",
    q: "Where can an organization compare and select from a large catalogue of models, including offerings from Microsoft, OpenAI, Anthropic and Meta?",
    a: [
      "The Microsoft 365 admin center",
      "The Teams app store",
      "The model catalogue in Microsoft Foundry",
      "The Copilot Prompt Gallery"
    ],
    c: [2],
    e: "Der Modellkatalog in Microsoft Foundry umfasst über 1.900 Modelle verschiedener Anbieter — dort erfolgt die Auswahl passend zu Modalität, Qualität, Latenz und Kosten."

  },

  /* ---- D3 / 3.1 ---- */
  {
    id: "731-3110", d: "d3", o: "3.1", t: "single",
    q: "Microsoft's responsible AI framework describes three operational stages. Which sequence is correct?",
    a: [
      "Discover, Protect, Govern",
      "Detect, Delete, Deny",
      "Plan, Build, Deploy",
      "Design, Develop, Distribute"
    ],
    c: [0],
    e: "Discover (Risiken erkennen und messen), Protect (Schutz auf Modell- und Agent-Ebene) und Govern (Monitoring und Compliance) bilden das operative Gerüst des Responsible AI Standard."
  },
  {
    id: "731-3111", d: "d3", o: "3.1", t: "single",
    q: "How should a leader describe the AI council when asked what it is?",
    a: [
      "A technical governance component built into Microsoft Foundry for policy enforcement.",
      "A Microsoft-run certification programme that accredits organizations as responsible AI adopters.",
      "An internal cross-functional governance body that guides AI strategy, oversight and alignment.",
      "A paid Microsoft consulting engagement that designs the organization's AI roadmap on request."
    ],
    c: [2],
    e: "Der AI Council ist ein internes Gremium, kein Microsoft-Produkt, -Programm oder -Service. Er bündelt Business, IT, Security, Legal und Datenschutz."
  },

  /* ---- D3 / 3.2 ---- */
  {
    id: "731-3213", d: "d3", o: "3.2", t: "single",
    q: "An adoption lead is looking for documented business outcome metrics per role and department to justify a Copilot rollout. Which Microsoft resource is designed for this?",
    a: [
      "The Copilot Scenario Library",
      "The Entra ID governance portal",
      "The Microsoft 365 roadmap",
      "The Azure pricing calculator"
    ],
    c: [0],
    e: "Die Copilot Scenario Library beschreibt konkrete Anwendungsfälle je Funktion (Sales, Marketing, Finance, IT, HR) samt zugehöriger Business-Outcome-Metriken — ideal als Grundlage für Enablement und Nutzenargumentation."
  },
  {
    id: "731-3214", d: "d3", o: "3.2", t: "single",
    q: "Which statement correctly describes AI champions in an adoption programme?",
    a: [
      "Members of the IT helpdesk who handle all AI-related support tickets centrally.",
      "External consultants engaged to run the deployment and hand over once adoption is stable.",
      "Internal ambassadors in each business area who demonstrate use cases and support colleagues.",
      "Certified Microsoft employees who are assigned to the customer for the duration of the rollout."
    ],
    c: [2],
    e: "Champions sind interne Botschafter aus den Fachbereichen. Ihr Hebel ist Peer-Vertrauen: sie zeigen Use Cases im eigenen Arbeitskontext und senken die Hemmschwelle wirksamer als zentrale Schulungen."
  }

  ]
};
