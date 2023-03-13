const userSchema = {
    id: { type: Number },
    username: { type: String },
    password: { type: String },
    email: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    last_login: { type: Date },
    total_logins: { type: Number },
  };
  