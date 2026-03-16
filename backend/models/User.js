const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["jobseeker", "employer"], required: true },
        avatar: String,
        resume: String,

        // for employer 
        companyName: String,
        companyDescription: String,
        companyLogo: String,
    }, 
    { timestamps: true }
);

// encrypt password before saving 
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return; // next();
    }

    // hash a password
    this.password = await bcrypt.hash(this.password, 10);
    // next();
});

// match entered password 
userSchema.methods.matchPassword = function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
}

module.exports = mongoose.model("User", userSchema);