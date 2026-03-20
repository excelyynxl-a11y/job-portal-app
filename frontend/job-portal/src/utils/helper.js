// validation email function 
export const validateEmail = (email) => {
    if (!email.trim()) {
        return 'Email is required';
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Please enter a valid email address.'
    }

    return '';
};

export const validatePassword = (password) => {
    if (!password) {
      return 'Password is required';
    } 

    if (password.length < 8) {
        return 'Password must be at least 8 character.'
    }
    const passwordRegex1 = /(?=.*[a-z])/;
    if (!passwordRegex1.test(password)) {
        return 'Password must contain at least one lowercase letter.'
    };
    const passwordRegex2 = /(?=.*[A-Z])/;
    if (!passwordRegex2.test(password)) {
        return 'Password must contain at least one uppercase letter.'
    };
    const passwordRegex3 = /(?=.*[0-9])/;
    if (!passwordRegex3.test(password)) {
        return 'Password must contain at least one number.'
    };
}

export const validateAvatar = (file) => {
    if (!file) {
        return ''
    };

    const allowedType = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!allowedType.includes(file.type)) {
        return 'Avatar must be a JPG or a PNG file.'
    }

    const maxSize = 5 * 1024 * 1024; // max size of 5MB 

    if (file.size > maxSize) {
        return 'Avatar must be less than 5MB.'
    };

    return '';
}

export const getInitials = (name) => {
    return name
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .toUpperCase()
        .slice(0, 2);
}