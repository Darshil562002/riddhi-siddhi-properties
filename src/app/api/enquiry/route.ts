import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, projectName, configuration, message, consent, honeypot } = body;

    if (honeypot) return NextResponse.json({ success: false }, { status: 400 });

    if (!name?.trim() || !phone?.trim() || !projectName || !consent) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!/^[6-9]\d{9}$/.test(phone.replace(/\s/g, ""))) {
      return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
    }

    const { error } = await supabase.from("project_enquiries").insert({
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim() || null,
      project_name: projectName,
      configuration: configuration || null,
      message: message?.trim() || null,
      consent: true,
    });

    if (error) {
      console.error("Supabase enquiry error:", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Enquiry route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
