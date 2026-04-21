---
name: writing-audience
description: "Audience-aware writing registers for documentation. Load before writing any human-facing doc (Mode B, README, onboarding). Encodes Hart's Rules as actionable constraints per audience type."
---

<insight>
Audience drives register; register drives vocabulary, sentence lead, and what to include vs omit. The same content written for engineers is unread by managers—and vice versa, imprecise for engineers.
</insight>

<why_this_matters>
Management docs written in technical register are skipped or misread. Technical docs written in general register lose the precision engineers need to act on them. Wrong register = the document fails its purpose, regardless of accuracy.
</why_this_matters>

<recognition_pattern>
Identify audience from the document type or injection context:
- Phase gate review, org-level summary, adoption pitch → **Executive / Evaluator**
- Handoff doc, architecture doc, runbook, API reference → **Technical**
- README "why" section, onboarding, public-facing explanation → **General**
- Adoption guide for a new org, framework pitch → **Evaluator / Sales**
- Compliance map, DPO briefing, legal review section, audit evidence doc → **Security / Legal / DPO**

When audience is ambiguous: default to **General** and flag in Residual Risks.
</recognition_pattern>

<approach>
1. State your audience choice before writing (working notes only — not in the output doc).
2. Apply the register constraints for that audience (see below).
3. Test before finalising: "Could the intended reader answer the document's core question without asking for clarification?" If no → wrong register or missing context.

**Executive register** (phase reviews, management summaries):
- Lead with business outcome before mechanism. Never explain how before what.
- Use concrete numbers: "−54% context loading" not "significantly reduced"
- No unexpanded acronyms. No tool names without plain-English description first.
- Max 3 bullets per concept. Max 4-line paragraphs.
- Active voice. Second person ("your team", "you get").

**Technical register** (handoffs, architecture docs, runbooks):
- Precision over simplicity. Accuracy is non-negotiable.
- Every command must be copy-paste runnable. Include expected output.
- Source of truth is the injected diff/spec — never invent or summarise what is visible.
- Acronyms, tool names, and jargon are expected and appropriate.
- Include failure modes alongside happy paths.

**General register** (README why-sections, onboarding, public-facing):
- Plain English. Relatable analogy before any technical term.
- No unexpanded acronym on first use. Ever.
- Lead with what the reader already knows, not what you know.
- One idea per sentence. Max 4-line paragraphs.
- Active voice. Second person.

**Security / Legal / DPO register** (compliance maps, audit docs, DPO briefings, legal review sections):
- Precision is non-negotiable. Accuracy over readability.
- Every regulatory reference must include: full regulation name + official citation (e.g. Regulation (EU) 2024/1689, Art. 14) + confidence tier with source link.
- Confidence tiers:
  - `[Verified — EUR-Lex](URL)` = checked against official text; URL must point to the EUR-Lex record for the specific regulation.
  - `[Cross-referenced]` = verified against secondary sources, plausible but not directly confirmed against official text.
  - `[Inferred — legal review required]` = logical inference from the regulation's scope; not directly verified; flag prominently.
- Standard EUR-Lex URLs: EU AI Act `https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689` · GDPR `https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679`
- Lead with the control, not the business outcome. "Append-only audit log enforced by command constraint" not "we protect your data."
- Include the "evidence at" location for every control claim: exact file path or table name.
- Flag inference explicitly: where classification or applicability depends on deployment context, state this as a caveat — it is not a weakness, it is accuracy.
- No business framing. A DPO does not need to know the cost saving; they need the Article number, the control description, and where to find the evidence.
- Active voice. Short sentences. One claim per sentence.

**Evaluator / Sales register** (adoption guides, pitch sections):
- Problem → solution → outcome structure. In that order.
- One concrete before/after: "X before, Y after" with a number.
- Differentiation point explicit in the opening paragraph.
- Compliance proof (standards, concrete benchmarks) early.
- Never start with features. Start with the problem the reader recognises.
</approach>

<example>
Same content, two registers:

**Technical (correct for a handoff):**
> `tenant_id` is injected from `current_user.tenant_id` via JWT middleware. Every SQLAlchemy query on tenant-owned resources passes `.where(Model.tenant_id == current_user.tenant_id)`. Missing filter returns cross-tenant data silently.

**General (correct for a README why-section):**
> Each customer's data is kept strictly separate. The system automatically checks that every database query is locked to the right customer — so one customer can never accidentally see another's data.

**Wrong (Technical content in Executive register):**
> ❌ "We implemented `.where(Model.tenant_id == current_user.tenant_id)` filtering on all SQLAlchemy queries to achieve EU AI Act Art. 10 compliance."
> An executive does not know what SQLAlchemy is. Lead with the outcome: "Customer data isolation is enforced at the database layer — independently verified, compliant with EU data governance requirements."
</example>
