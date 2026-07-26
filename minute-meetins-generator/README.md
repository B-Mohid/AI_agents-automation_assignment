# Agentic n8n Meeting Minutes & Action Item Generator

An automated AI-powered n8n workflow that ingests raw meeting transcripts (from Zoom, Microsoft Teams, Otter.ai, or direct webhooks), extracts structured key insights using Claude 3.5 Sonnet / GPT-4o, renders an HTML summary report, and emails it to stakeholders.

---

## 🏗 System Architecture

```text
+------------------+     +-------------------+     +-------------------------+
| Google Drive /   | --> | Read File Content | --> | LangChain / Anthropic   |
| Webhook Trigger  |     | (Text/Transcript) |     | Structured Parser Node  |
+------------------+     +-------------------+     +-------------------------+
                                                                |
                                                                v
+------------------+     +-------------------+     +-------------------------+
| Send Email via   | <-- | Format Markdown / | <-- | Standardized JSON       |
| SMTP / Gmail     |     | HTML Body         |     | Response Schema         |
+------------------+     +-------------------+     +-------------------------+
```

### 💡 Key Features

- Multi-source ingestion via Google Drive file drop or direct HTTP webhook POST requests.
- Strict JSON schema enforcement using Structured Output Parser to prevent hallucinated schemas.
- Executive summary extraction with concise, high-level takeaways.
- Action item tracking with owner assignment, deadlines, and priority levels (High, Medium, Low).
- HTML email templating to generate formatted summary reports for stakeholders.

## 🚀 Quickstart & Setup

### Prerequisites

- An active n8n instance (Cloud or self-hosted).
- An Anthropic API key for `claude-3-5-sonnet-20241022` or an OpenAI API key for `gpt-4o`.
- Google Workspace / Gmail OAuth credentials or custom SMTP credentials.

### Step-by-Step Configuration

1. Import the workflow
   - In n8n, go to `Workflows` > `Import from File`.
   - Select `workflows/meeting_minutes_workflow.json` from this repository.

2. Configure credentials
   - Add your Anthropic or OpenAI API credentials to the LLM Chain node.
   - Attach Google Drive OAuth2 credentials to the Google Drive Trigger node.
   - Attach Gmail OAuth2 or SMTP credentials to the Email node.

3. Set up the JSON schema
   - Ensure the Structured Output Parser attached to the AI Agent node uses the following JSON schema:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "title": { "type": "string" },
    "summary": { "type": "string" },
    "decisions": { "type": "array", "items": { "type": "string" } },
    "action_items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "task": { "type": "string" },
          "owner": { "type": "string" },
          "deadline": { "type": "string" },
          "priority": { "type": "string", "enum": ["High", "Medium", "Low"] }
        },
        "required": ["task", "owner", "priority"]
      }
    },
    "blockers": { "type": "array", "items": { "type": "string" } }
  },
  "required": ["title", "summary", "decisions", "action_items", "blockers"]
}
```

### Notes

- `deadline` is stored as a string to support multiple date formats. Normalizing dates in the parser is recommended.
- The HTML formatter script is located in `scripts/format_html.js`.
- Sample transcript input is available in `samples/sample_transcript.txt`.
