/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  let criteria = 0;
  let hasUpper = false;
  let hasLower = false;
  let hasSpecials = false;
  let hasDigits = false;
  const specials = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  if (password === "" || typeof password !== "string") {
    return "weak";
  }
  if (password.length >= 8) {
    criteria++;
  }
  for (let char of password) {
    if (!hasUpper && char >= "A" && char <= "Z") {
      hasUpper=true;
      criteria++;
    }
    if (!hasLower && char >= "a" && char <= "z") {
      hasLower=true;
      criteria++;
    }
    if (!hasDigits && char >= "0" && char <= "9") {
      hasDigits=true;
      criteria++;
    }
    if (!hasSpecials && specials.includes(char)) {
      hasSpecials=true;
      criteria++;
    }
    if (hasUpper && hasLower && hasDigits && hasSpecials) break;
  }
  if (criteria <= 1) {
    return "weak";
  } else if (criteria <= 3) {
    return "medium";
  } else if (criteria === 4) {
    return "strong";
  } else {
    return "very strong";
  }
}
