/**
 * ContactForm Component
 * Design: AAA Cinematic Dark — Logo Purple Theme
 * - Fields: Full Name, Email, Project Type, Budget, Message
 * - Real-time English validation
 * - Formspree integration (replace FORM_ID with your actual ID)
 * - Animated submit button with shimmer + loading state
 * - Success / error feedback with neon glow
 */

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2, User, Mail, Briefcase, DollarSign, MessageSquare } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

// ── Replace with your actual Formspree form ID ──────────────
const FORMSPREE_ID = "xpwzgkqy";

const PROJECT_TYPES = [
  "VR Experience",
  "AR Application",
  "Mixed Reality Solution",
  "3D Game Assets",
  "Architectural Visualization",
  "Web 3D Experience",
  "XR Training Simulation",
  "Character & Creature Design",
  "Environment Art",
  "Other",
];

const BUDGET_RANGES = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Let's discuss",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          budget: formData.budget || "Not specified",
          message: formData.message,
          _subject: `New Project Inquiry — ${formData.projectType} from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", projectType: "", budget: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputBase = `
    w-full px-4 py-3 rounded-lg contact-form-input
    font-body text-sm text-foreground
    transition-all duration-300
  `;
  const labelClass = "block text-xs font-accent tracking-widest uppercase text-foreground/60 mb-2";
  const errorClass = "text-xs text-red-400 mt-1.5 flex items-center gap-1";

  const getBorder = (field: keyof FormErrors) => {
    if (errors[field]) return "1px solid oklch(0.60 0.22 25 / 0.6)";
    if (focusedField === field) return "1px solid oklch(0.55 0.28 290 / 0.7)";
    return "1px solid oklch(0.20 0.04 280)";
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-6">
        <div className="relative">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center animate-pulse-glow"
            style={{ background: "oklch(0.55 0.28 290 / 0.1)", border: "1px solid oklch(0.55 0.28 290 / 0.4)" }}
          >
            <CheckCircle size={44} style={{ color: "oklch(0.65 0.28 290)" }} />
          </div>
          <div
            className="absolute inset-0 rounded-full blur-2xl"
            style={{ background: "oklch(0.55 0.28 290 / 0.08)" }}
          />
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-4xl text-glow-purple" style={{ color: "oklch(0.75 0.22 290)" }}>
            MESSAGE SENT!
          </h3>
          <p className="text-muted-foreground font-body text-base">
            Thank you for reaching out. I'll get back to you within 24 hours.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-2.5 rounded-lg font-heading text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
          style={{
            border: "1px solid oklch(0.55 0.28 290 / 0.4)",
            color: "oklch(0.75 0.22 290)",
            background: "oklch(0.55 0.28 290 / 0.06)",
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-2">
              <User size={12} style={{ color: "oklch(0.65 0.28 290)" }} />
              Full Name *
            </span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={e => handleChange("name", e.target.value)}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            placeholder="Your full name"
            className={inputBase}
            style={{ border: getBorder("name") }}
          />
          {errors.name && (
            <p className={errorClass}><AlertCircle size={12} />{errors.name}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-2">
              <Mail size={12} style={{ color: "oklch(0.65 0.28 290)" }} />
              Email Address *
            </span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={e => handleChange("email", e.target.value)}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            placeholder="your@email.com"
            className={inputBase}
            style={{ border: getBorder("email") }}
          />
          {errors.email && (
            <p className={errorClass}><AlertCircle size={12} />{errors.email}</p>
          )}
        </div>
      </div>

      {/* Row 2: Project Type + Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-2">
              <Briefcase size={12} style={{ color: "oklch(0.65 0.28 290)" }} />
              Project Type *
            </span>
          </label>
          <select
            value={formData.projectType}
            onChange={e => handleChange("projectType", e.target.value)}
            onFocus={() => setFocusedField("projectType")}
            onBlur={() => setFocusedField(null)}
            className={inputBase}
            style={{ border: getBorder("projectType"), appearance: "none" }}
          >
            <option value="" disabled>Select project type</option>
            {PROJECT_TYPES.map(type => (
              <option key={type} value={type} style={{ background: "#0a0a12" }}>{type}</option>
            ))}
          </select>
          {errors.projectType && (
            <p className={errorClass}><AlertCircle size={12} />{errors.projectType}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-2">
              <DollarSign size={12} style={{ color: "oklch(0.72 0.18 210)" }} />
              Estimated Budget
            </span>
          </label>
          <select
            value={formData.budget}
            onChange={e => handleChange("budget", e.target.value)}
            onFocus={() => setFocusedField("budget")}
            onBlur={() => setFocusedField(null)}
            className={inputBase}
            style={{ border: "1px solid oklch(0.20 0.04 280)", appearance: "none" }}
          >
            <option value="" style={{ background: "#0a0a12" }}>Select budget (optional)</option>
            {BUDGET_RANGES.map(range => (
              <option key={range} value={range} style={{ background: "#0a0a12" }}>{range}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>
          <span className="flex items-center gap-2">
            <MessageSquare size={12} style={{ color: "oklch(0.65 0.28 290)" }} />
            Your Message *
          </span>
        </label>
        <textarea
          value={formData.message}
          onChange={e => handleChange("message", e.target.value)}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          placeholder="Tell me about your project — goals, timeline, and any specific requirements..."
          rows={5}
          className={`${inputBase} resize-none`}
          style={{ border: getBorder("message") }}
        />
        <div className="flex justify-between items-start mt-1.5">
          {errors.message ? (
            <p className={errorClass}><AlertCircle size={12} />{errors.message}</p>
          ) : <span />}
          <span
            className="text-xs font-accent"
            style={{ color: formData.message.length >= 20 ? "oklch(0.65 0.28 290)" : "oklch(0.45 0.04 280)" }}
          >
            {formData.message.length} / 20+
          </span>
        </div>
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div className="flex items-center gap-3 p-4 rounded-lg" style={{ background: "oklch(0.60 0.22 25 / 0.08)", border: "1px solid oklch(0.60 0.22 25 / 0.3)" }}>
          <AlertCircle size={18} style={{ color: "oklch(0.65 0.22 25)" }} />
          <p className="text-sm font-body" style={{ color: "oklch(0.65 0.22 25)" }}>
            Something went wrong. Please try again or reach out directly via email.
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 px-8 rounded-lg font-heading font-semibold text-sm tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-300 relative overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed"
        style={{
          background: "oklch(0.55 0.28 290)",
          color: "oklch(0.98 0.005 290)",
        }}
      >
        {/* Shimmer */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
        {/* Hover glow */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ boxShadow: "0 0 30px oklch(0.55 0.28 290 / 0.5) inset" }} />

        {status === "loading" ? (
          <><Loader2 size={18} className="animate-spin" /> Sending...</>
        ) : (
          <><Send size={18} /> Send Message</>
        )}
      </button>

      <p className="text-xs text-center font-body" style={{ color: "oklch(0.42 0.04 280)" }}>
        Response within 24 hours &nbsp;·&nbsp; All information is confidential
      </p>
    </form>
  );
}
