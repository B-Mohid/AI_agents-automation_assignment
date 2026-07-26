/**
 * n8n Code Node Script: Formats structured JSON meeting output into HTML.
 * Input expects `$json.output` generated from the Structured Parser node.
 */

const data = $json.output || $json;

let html = `<h2>${data.title || 'Meeting Summary & Action Items'}</h2>`;
html += `<p><strong>Executive Summary:</strong> ${data.summary || 'N/A'}</p>`;

// Decisions
html += `<h3>Strategic Decisions Made</h3><ul>`;
if (Array.isArray(data.decisions) && data.decisions.length > 0) {
  data.decisions.forEach(d => { html += `<li>${d}</li>`; });
} else {
  html += `<li>No major decisions logged.</li>`;
}
html += `</ul>`;

// Action Items Table
html += `<h3>Action Items</h3>`;
html += `<table border="1" cellpadding="6" style="border-collapse:collapse; width:100%; text-align:left;">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th>Task</th>
      <th>Owner</th>
      <th>Deadline</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>`;

if (Array.isArray(data.action_items) && data.action_items.length > 0) {
  data.action_items.forEach(item => {
    let priorityColor = '#000000';
    if (item.priority === 'High') priorityColor = '#d9534f';
    if (item.priority === 'Medium') priorityColor = '#f0ad4e';
    if (item.priority === 'Low') priorityColor = '#5cb85c';

    html += `<tr>
      <td>${item.task}</td>
      <td>${item.owner}</td>
      <td>${item.deadline || 'N/A'}</td>
      <td style="color: ${priorityColor}; font-weight: bold;">${item.priority}</td>
    </tr>`;
  });
} else {
  html += `<tr><td colspan="4">No action items assigned.</td></tr>`;
}
html += `</tbody></table>`;

// Unresolved Risks / Blockers
html += `<h3>Unresolved Risks & Blockers</h3><ul>`;
if (Array.isArray(data.blockers) && data.blockers.length > 0) {
  data.blockers.forEach(b => { html += `<li>${b}</li>`; });
} else {
  html += `<li>None flagged.</li>`;
}
html += `</ul>`;

return {
  json: {
    formatted_html: html,
    raw_data: data
  }
};