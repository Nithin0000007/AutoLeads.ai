import Lead from "../../models/Lead.js";


export const submitLead = async (req, res) => {
  try {
    const { name, email, phone, business_type, message, source } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    const lead = new Lead({
      name,
      email,
      phone,
      business_type,
      message,
      source,
    });

    await lead.save();

    res.status(201).json({ success: true, lead });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}