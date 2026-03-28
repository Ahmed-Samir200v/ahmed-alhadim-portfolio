/**
 * ContactForm Component
 * FusionAI-inspired interactive contact form:
 * - Fields: Name, Email, Project Type, Budget, Message
 * - Real-time validation with error messages
 * - Formspree integration for email delivery
 * - Animated submit button with loading state
 * - Success/error feedback with neon glow styling
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

const PROJECT_TYPES = [
  "VR Experience",
  "AR Application",
  "MR Solution",
  "3D Game Assets",
  "Architectural Visualization",
  "Web 3D Experience",
  "XR Training Simulation",
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
      newErrors.name = "الاسم مطلوب";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "الاسم يجب أن يكون حرفين على الأقل";
    }

    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    if (!formData.projectType) {
      newErrors.projectType = "يرجى اختيار نوع المشروع";
    }

    if (!formData.message.trim()) {
      newErrors.message = "الرسالة مطلوبة";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "الرسالة يجب أن تكون 20 حرفاً على الأقل";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      // Using Formspree - replace with actual form ID
      const response = await fetch("https://formspree.io/f/xpwzgkqy", {
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
          _subject: `New Project Inquiry from ${formData.name} - ${formData.projectType}`,
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

  const inputBaseClass = `
    w-full px-4 py-3 rounded-lg contact-form-input
    font-body text-sm text-foreground
    transition-all duration-300
  `;

  const labelClass = "block text-sm font-heading font-semibold text-foreground/80 mb-2";
  const errorClass = "text-xs text-red-400 mt-1.5 flex items-center gap-1";

  const getFieldBorderClass = (field: keyof FormErrors) => {
    if (errors[field]) return "border-red-500/60 focus:border-red-500";
    if (focusedField === field) return "border-primary/70";
    return "border-border";
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center animate-pulse-glow">
            <CheckCircle size={40} className="text-primary" />
          </div>
          <div className="absolute inset-0 rounded-full bg-primary/5 blur-xl" />
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-3xl text-primary text-glow-blue">تم الإرسال!</h3>
          <p className="text-muted-foreground font-body">
            شكراً لتواصلك معي. سأرد عليك خلال 24 ساعة.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-2 rounded-lg border border-primary/40 text-primary text-sm font-heading hover:bg-primary/10 transition-all duration-300"
        >
          إرسال رسالة أخرى
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-2">
              <User size={14} className="text-primary" />
              الاسم الكامل *
            </span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={e => handleChange("name", e.target.value)}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            placeholder="Ahmed Al-Hadim"
            className={`${inputBaseClass} ${getFieldBorderClass("name")}`}
            style={{ border: `1px solid` }}
          />
          {errors.name && (
            <p className={errorClass}>
              <AlertCircle size={12} />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-primary" />
              البريد الإلكتروني *
            </span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={e => handleChange("email", e.target.value)}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            placeholder="your@email.com"
            className={`${inputBaseClass} ${getFieldBorderClass("email")}`}
            style={{ border: `1px solid` }}
          />
          {errors.email && (
            <p className={errorClass}>
              <AlertCircle size={12} />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Project Type + Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Type */}
        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-2">
              <Briefcase size={14} className="text-primary" />
              نوع المشروع *
            </span>
          </label>
          <select
            value={formData.projectType}
            onChange={e => handleChange("projectType", e.target.value)}
            onFocus={() => setFocusedField("projectType")}
            onBlur={() => setFocusedField(null)}
            className={`${inputBaseClass} ${getFieldBorderClass("projectType")}`}
            style={{ border: `1px solid`, appearance: "none" }}
          >
            <option value="" disabled>اختر نوع المشروع</option>
            {PROJECT_TYPES.map(type => (
              <option key={type} value={type} style={{ background: "#0d1117" }}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className={errorClass}>
              <AlertCircle size={12} />
              {errors.projectType}
            </p>
          )}
        </div>

        {/* Budget */}
        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-2">
              <DollarSign size={14} className="text-accent" />
              الميزانية التقريبية
            </span>
          </label>
          <select
            value={formData.budget}
            onChange={e => handleChange("budget", e.target.value)}
            onFocus={() => setFocusedField("budget")}
            onBlur={() => setFocusedField(null)}
            className={`${inputBaseClass} border-border`}
            style={{ border: `1px solid`, appearance: "none" }}
          >
            <option value="" style={{ background: "#0d1117" }}>اختر الميزانية (اختياري)</option>
            {BUDGET_RANGES.map(range => (
              <option key={range} value={range} style={{ background: "#0d1117" }}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>
          <span className="flex items-center gap-2">
            <MessageSquare size={14} className="text-primary" />
            رسالتك *
          </span>
        </label>
        <textarea
          value={formData.message}
          onChange={e => handleChange("message", e.target.value)}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          placeholder="أخبرني عن مشروعك، أهدافه، والجدول الزمني المتوقع..."
          rows={5}
          className={`${inputBaseClass} ${getFieldBorderClass("message")} resize-none`}
          style={{ border: `1px solid` }}
        />
        <div className="flex justify-between items-start mt-1.5">
          {errors.message ? (
            <p className={errorClass}>
              <AlertCircle size={12} />
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <span className={`text-xs ${formData.message.length < 20 ? "text-muted-foreground" : "text-primary"}`}>
            {formData.message.length} / 20+
          </span>
        </div>
      </div>

      {/* Error state */}
      {status === "error" && (
        <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
          <AlertCircle size={18} />
          <p className="text-sm font-body">
            حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو التواصل مباشرة عبر البريد الإلكتروني.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="
          w-full py-4 px-8 rounded-lg
          bg-primary text-primary-foreground
          font-heading font-semibold text-base
          flex items-center justify-center gap-3
          transition-all duration-300
          hover:bg-primary/90 btn-glow-blue
          disabled:opacity-60 disabled:cursor-not-allowed
          relative overflow-hidden group
        "
      >
        {/* Shimmer effect on hover */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        
        {status === "loading" ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            جاري الإرسال...
          </>
        ) : (
          <>
            <Send size={20} />
            إرسال الرسالة
          </>
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center font-body">
        سيتم الرد خلال 24 ساعة • جميع المعلومات محمية وسرية
      </p>
    </form>
  );
}
