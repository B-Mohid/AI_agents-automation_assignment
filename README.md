# 🤖 AI Agents & Automation Repository

Welcome to the **AI Agents & Automation** repository! This repository contains a collection of intelligent workflows, multi-agent systems, and AI-driven automation projects designed to streamline complex tasks—from generating meeting documentation to analyzing international tax rules and planning customized travel itineraries.

> ⚠️ **Note on API Keys:** 
> API keys are **not pre-applied** in this repository to ensure security and privacy. Please add your own API key(s) (e.g., OpenAI, Google Gemini, Anthropic, or Serper) to your local `.env` file or environment variables before running the scripts or notebooks. Add your API keys and enjoy exploring!

---

## 📁 Repository Structure

| Project / Notebook | Description | Core Capabilities |
| :--- | :--- | :--- |
| **`minute-meetings-generator/`** | Automated Meeting Minutes (MoM) Generator | Summarization, action item extraction, key decision tracking |
| **`DTAA_TaxEngine.ipynb`** | Double Taxation Avoidance Agreement Tax Engine | Cross-border tax treaty reasoning, rate calculation, exemption rules |
| **`TirthYatra.ipynb`** | Multi-Agent Pilgrimage & Travel Planner | Smart route planning, temple schedule alignment, itinerary optimization |

---

## 🛠️ Overview of Projects

### 1. 📝 Minute Meetings Generator (`minute-meetings-generator/`)
An automated assistant that converts raw meeting transcripts or audio files into structured documentation:
- Summarizes discussion threads and key takeaways.
- Identifies and assigns action items to relevant team members.
- Formats outputs into clean, ready-to-share Markdown or text reports.

### 2. ⚖️ DTAA Tax Engine (`DTAA_TaxEngine.ipynb`)
An AI-powered reasoning engine for Double Taxation Avoidance Agreements (DTAA):
- Analyzes tax treaties between source and resident countries.
- Determines applicable withholding tax rates, treaty benefits, and tax credits.
- Provides structured reasoning and treaty article references for tax decisions.

### 3. 🚩 TirthYatra Planner (`TirthYatra.ipynb`)
A travel planning agent designed specifically for religious pilgrimages and tours:
- Generates day-by-day itineraries tailored to location, timing, and travel constraints.
- Factors in temple timings, transportation modes, and stay recommendations.
- Adapts to preferences such as group size, budget, and senior-citizen accommodations.

---

## 🚀 Getting Started

### Prerequisites
- **Python:** 3.9 or higher
- **Jupyter Notebook / JupyterLab** (for running `.ipynb` files)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/B-Mohid/AI_agents-automation_assignment.git](https://github.com/B-Mohid/AI_agents-automation_assignment.git)
   cd AI_agents-automation_assignment


### 2. Install Dependencies

```bash
pip install -r requirements.txt

```

> **Note:** If `requirements.txt` is not provided, install necessary packages manually:
> ```bash
> pip install openai google-generativeai langchain crewai python-dotenv
> 
> ```
> 
> 

### 3. Configure API Keys

Create a `.env` file in the project root directory:

```env
OPENAI_API_KEY="your_openai_api_key_here"
GEMINI_API_KEY="your_gemini_api_key_here"
ANTHROPIC_API_KEY="your_anthropic_api_key_here"

```

### 4. Run the Applications

* **Notebooks:** Launch Jupyter Notebook and run `DTAA_TaxEngine.ipynb` or `TirthYatra.ipynb`:
```bash
jupyter notebook

```


* **Minute Meetings Generator:** Navigate to the folder and execute the main entry script:
```bash
cd minute-meetings-generator
python main.py

```



---

## 🤝 Contributing

Contributions, feedback, and optimization ideas for the agent workflows are welcome! Feel free to open an issue or submit a pull request.

