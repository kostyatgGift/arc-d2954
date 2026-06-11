// ============================================
// TRANSLATIONS
// ============================================
const translations = {
    ru: {
        title: 'Вход',
        titleReg: 'Регистрация',
        subtitle: 'Войдите в свою учётную запись',
        subtitleReg: 'Создайте новую учётную запись',
        emailPlaceholder: 'Email',
        passwordPlaceholder: 'Пароль',
        confirmPassword: 'Подтвердите пароль',
        submitLogin: 'Войти',
        submitRegister: 'Зарегистрироваться',
        switchToRegister: 'Нет аккаунта? Зарегистрироваться',
        switchToLogin: 'Уже есть аккаунт? Войти',
        orVia: 'или через',
        google: 'Google',
        yoomoney: 'ЮMoney',
        wallet: 'Кошелёк',
        azov: 'Azovsk',
        loginError: 'Неверный email или пароль',
        registerSuccess: 'Регистрация успешна! Войдите.',
        bannedError: 'Ваш аккаунт заблокирован',
        passMismatch: 'Пароли не совпадают',
        registerExists: 'Этот email уже зарегистрирован'
    },
    en: {
        title: 'Login',
        titleReg: 'Register',
        subtitle: 'Sign in to your account',
        subtitleReg: 'Create a new account',
        emailPlaceholder: 'Email',
        passwordPlaceholder: 'Password',
        confirmPassword: 'Confirm password',
        submitLogin: 'Login',
        submitRegister: 'Register',
        switchToRegister: 'No account? Register',
        switchToLogin: 'Already have an account? Login',
        orVia: 'or via',
        google: 'Google',
        yoomoney: 'YooMoney',
        wallet: 'Wallet',
        azov: 'Azovsk',
        loginError: 'Invalid email or password',
        registerSuccess: 'Registration successful! Log in.',
        bannedError: 'Your account is banned',
        passMismatch: 'Passwords do not match',
        registerExists: 'This email is already registered'
    },
    de: {
        title: 'Anmelden',
        titleReg: 'Registrieren',
        subtitle: 'Melden Sie sich an',
        subtitleReg: 'Erstellen Sie ein Konto',
        emailPlaceholder: 'E-Mail',
        passwordPlaceholder: 'Passwort',
        confirmPassword: 'Passwort bestätigen',
        submitLogin: 'Anmelden',
        submitRegister: 'Registrieren',
        switchToRegister: 'Kein Konto? Registrieren',
        switchToLogin: 'Bereits ein Konto? Anmelden',
        orVia: 'oder über',
        google: 'Google',
        yoomoney: 'YooMoney',
        wallet: 'Wallet',
        azov: 'Azovsk',
        loginError: 'Falsche E-Mail oder Passwort',
        registerSuccess: 'Registrierung erfolgreich!',
        bannedError: 'Ihr Konto wurde gesperrt',
        passMismatch: 'Passwörter stimmen nicht überein',
        registerExists: 'E-Mail bereits registriert'
    },
    fr: {
        title: 'Connexion',
        titleReg: 'Inscription',
        subtitle: 'Connectez-vous à votre compte',
        subtitleReg: 'Créez un nouveau compte',
        emailPlaceholder: 'Email',
        passwordPlaceholder: 'Mot de passe',
        confirmPassword: 'Confirmer le mot de passe',
        submitLogin: 'Se connecter',
        submitRegister: 'S\'inscrire',
        switchToRegister: 'Pas de compte? S\'inscrire',
        switchToLogin: 'Déjà un compte? Se connecter',
        orVia: 'ou via',
        google: 'Google',
        yoomoney: 'YooMoney',
        wallet: 'Portefeuille',
        azov: 'Azovsk',
        loginError: 'Email ou mot de passe incorrect',
        registerSuccess: 'Inscription réussie!',
        bannedError: 'Votre compte est bloqué',
        passMismatch: 'Les mots de passe ne correspondent pas',
        registerExists: 'Cet email est déjà inscrit'
    },
    es: {
        title: 'Iniciar sesión',
        titleReg: 'Registrarse',
        subtitle: 'Inicia sesión en tu cuenta',
        subtitleReg: 'Crea una nueva cuenta',
        emailPlaceholder: 'Correo',
        passwordPlaceholder: 'Contraseña',
        confirmPassword: 'Confirmar contraseña',
        submitLogin: 'Entrar',
        submitRegister: 'Registrarse',
        switchToRegister: '¿Sin cuenta? Registrarse',
        switchToLogin: '¿Ya tienes cuenta? Entrar',
        orVia: 'o mediante',
        google: 'Google',
        yoomoney: 'YooMoney',
        wallet: 'Billetera',
        azov: 'Azovsk',
        loginError: 'Correo o contraseña incorrectos',
        registerSuccess: '¡Registro exitoso!',
        bannedError: 'Tu cuenta está bloqueada',
        passMismatch: 'Las contraseñas no coinciden',
        registerExists: 'Este correo ya está registrado'
    },
    pt: {
        title: 'Entrar',
        titleReg: 'Registrar',
        subtitle: 'Acesse sua conta',
        subtitleReg: 'Crie uma nova conta',
        emailPlaceholder: 'Email',
        passwordPlaceholder: 'Senha',
        confirmPassword: 'Confirmar senha',
        submitLogin: 'Entrar',
        submitRegister: 'Registrar',
        switchToRegister: 'Sem conta? Registrar',
        switchToLogin: 'Já tem conta? Entrar',
        orVia: 'ou via',
        google: 'Google',
        yoomoney: 'YooMoney',
        wallet: 'Carteira',
        azov: 'Azovsk',
        loginError: 'Email ou senha incorretos',
        registerSuccess: 'Registro bem-sucedido!',
        bannedError: 'Sua conta foi bloqueada',
        passMismatch: 'Senhas não coincidem',
        registerExists: 'Email já registrado'
    },
    it: {
        title: 'Accedi',
        titleReg: 'Registrati',
        subtitle: 'Accedi al tuo account',
        subtitleReg: 'Crea un nuovo account',
        emailPlaceholder: 'Email',
        passwordPlaceholder: 'Password',
        confirmPassword: 'Conferma password',
        submitLogin: 'Accedi',
        submitRegister: 'Registrati',
        switchToRegister: 'Nessun account? Registrati',
        switchToLogin: 'Già hai un account? Accedi',
        orVia: 'o tramite',
        google: 'Google',
        yoomoney: 'YooMoney',
        wallet: 'Portafoglio',
        azov: 'Azovsk',
        loginError: 'Email o password errati',
        registerSuccess: 'Registrazione completata!',
        bannedError: 'Account bloccato',
        passMismatch: 'Le password non corrispondono',
        registerExists: 'Email già registrata'
    },
    pl: {
        title: 'Zaloguj',
        titleReg: 'Rejestracja',
        subtitle: 'Zaloguj się na swoje konto',
        subtitleReg: 'Utwórz nowe konto',
        emailPlaceholder: 'Email',
        passwordPlaceholder: 'Hasło',
        confirmPassword: 'Potwierdź hasło',
        submitLogin: 'Zaloguj',
        submitRegister: 'Zarejestruj',
        switchToRegister: 'Brak konta? Zarejestruj',
        switchToLogin: 'Masz konto? Zaloguj',
        orVia: 'lub przez',
        google: 'Google',
        yoomoney: 'YooMoney',
        wallet: 'Portfel',
        azov: 'Azovsk',
        loginError: 'Nieprawidłowy email lub hasło',
        registerSuccess: 'Rejestracja udana!',
        bannedError: 'Twoje konto jest zablokowane',
        passMismatch: 'Hasła nie są zgodne',
        registerExists: 'Email już zarejestrowany'
    },
    uk: {
        title: 'Вхід',
        titleReg: 'Реєстрація',
        subtitle: 'Увійдіть у свій обліковий запис',
        subtitleReg: 'Створіть новий обліковий запис',
        emailPlaceholder: 'Email',
        passwordPlaceholder: 'Пароль',
        confirmPassword: 'Підтвердьте пароль',
        submitLogin: 'Увійти',
        submitRegister: 'Зареєструватися',
        switchToRegister: 'Немає акаунта? Зареєструватися',
        switchToLogin: 'Вже є акаунт? Увійти',
        orVia: 'або через',
        google: 'Google',
        yoomoney: 'ЮMoney',
        wallet: 'Гаманець',
        azov: 'Azovsk',
        loginError: 'Невірний email або пароль',
        registerSuccess: 'Реєстрація успішна!',
        bannedError: 'Ваш акаунт заблоковано',
        passMismatch: 'Паролі не співпадають',
        registerExists: 'Цей email вже зареєстровано'
    },
    zh: {
        title: '登录',
        titleReg: '注册',
        subtitle: '登录您的账户',
        subtitleReg: '创建新账户',
        emailPlaceholder: '邮箱',
        passwordPlaceholder: '密码',
        confirmPassword: '确认密码',
        submitLogin: '登录',
        submitRegister: '注册',
        switchToRegister: '没有账户？注册',
        switchToLogin: '已有账户？登录',
        orVia: '或通过',
        google: 'Google',
        yoomoney: 'YooMoney',
        wallet: '钱包',
        azov: 'Azovsk',
        loginError: '邮箱或密码错误',
        registerSuccess: '注册成功！',
        bannedError: '您的账户已被封禁',
        passMismatch: '密码不匹配',
        registerExists: '该邮箱已注册'
    },
    ja: {
        title: 'ログイン',
        titleReg: '登録',
        subtitle: 'アカウントにログイン',
        subtitleReg: '新規アカウント作成',
        emailPlaceholder: 'メール',
        passwordPlaceholder: 'パスワード',
        confirmPassword: 'パスワード確認',
        submitLogin: 'ログイン',
        submitRegister: '登録',
        switchToRegister: 'アカウントがありませんか？登録',
        switchToLogin: 'すでにアカウントをお持ちですか？ログイン',
        orVia: 'または',
        google: 'Google',
        yoomoney: 'YooMoney',
        wallet: 'ウォレット',
        azov: 'Azovsk',
        loginError: 'メールまたはパスワードが間違っています',
        registerSuccess: '登録成功！',
        bannedError: 'アカウントは停止されました',
        passMismatch: 'パスワードが一致しません',
        registerExists: 'このメールは既に登録されています'
    },
    ar: {
        title: 'تسجيل الدخول',
        titleReg: 'التسجيل',
        subtitle: 'تسجيل الدخول إلى حسابك',
        subtitleReg: 'إنشاء حساب جديد',
        emailPlaceholder: 'البريد الإلكتروني',
        passwordPlaceholder: 'كلمة المرور',
        confirmPassword: 'تأكيد كلمة المرور',
        submitLogin: 'دخول',
        submitRegister: 'تسجيل',
        switchToRegister: 'ليس لديك حساب؟ سجل',
        switchToLogin: 'لديك حساب بالفعل؟ دخول',
        orVia: 'أو عبر',
        google: 'Google',
        yoomoney: 'YooMoney',
        wallet: 'محفظة',
        azov: 'Azovsk',
        loginError: 'بريد إلكتروني أو كلمة مرور خاطئة',
        registerSuccess: 'تم التسجيل بنجاح!',
        bannedError: 'تم حظر حسابك',
        passMismatch: 'كلمات المرور غير متطابقة',
        registerExists: 'البريد الإلكتروني مسجل بالفعل'
    },
    tr: {
        title: 'Giriş',
        titleReg: 'Kayıt',
        subtitle: 'Hesabınıza giriş yapın',
        subtitleReg: 'Yeni hesap oluşturun',
        emailPlaceholder: 'E-posta',
        passwordPlaceholder: 'Şifre',
        confirmPassword: 'Şifreyi onayla',
        submitLogin: 'Giriş',
        submitRegister: 'Kayıt',
        switchToRegister: 'Hesabın yok mu? Kayıt ol',
        switchToLogin: 'Zaten hesabın var mı? Giriş yap',
        orVia: 'veya',
        google: 'Google',
        yoomoney: 'YooMoney',
        wallet: 'Cüzdan',
        azov: 'Azovsk',
        loginError: 'Yanlış e-posta veya şifre',
        registerSuccess: 'Kayıt başarılı!',
        bannedError: 'Hesabınız yasaklandı',
        passMismatch: 'Şifreler eşleşmiyor',
        registerExists: 'Bu e-posta zaten kayıtlı'
    }
};

// ============================================
// STATE
// ============================================
let currentLang = localStorage.getItem('site_lang') || 'ru';
let isLoginMode = true;

// ============================================
// DOM REFS
// ============================================
const pageTitle = document.getElementById('pageTitle');
const pageSubtitle = document.getElementById('pageSubtitle');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');
const switchModeLink = document.getElementById('switchModeLink');
const orVia = document.getElementById('orVia');
const googleLabel = document.getElementById('googleLabel');
const yooLabel = document.getElementById('yooLabel');
const walletLabel = document.getElementById('walletLabel');
const azovLabel = document.getElementById('azovLabel');
const langSelect = document.getElementById('langSelect');
const authForm = document.getElementById('authForm');

// ============================================
// LANG SWITCHER
// ============================================
function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    applyLang();
}

function applyLang() {
    const t = translations[currentLang];
    if (!t) return;

    pageTitle.textContent = isLoginMode ? t.title : t.titleReg;
    pageSubtitle.textContent = isLoginMode ? t.subtitle : t.subtitleReg;
    emailInput.placeholder = t.emailPlaceholder;
    passwordInput.placeholder = t.passwordPlaceholder;
    submitBtn.textContent = isLoginMode ? t.submitLogin : t.submitRegister;
    switchModeLink.textContent = isLoginMode ? t.switchToRegister : t.switchToLogin;
    orVia.textContent = t.orVia;
    googleLabel.textContent = t.google;
    yooLabel.textContent = t.yoomoney;
    walletLabel.textContent = t.wallet;
    azovLabel.textContent = t.azov;

    if (langSelect) langSelect.value = currentLang;
}

// ============================================
// AUTH
// ============================================
function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function handleLogin(email, password) {
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        alert(translations[currentLang]?.loginError || 'Invalid email or password');
        return;
    }

    if (user.banned) {
        alert(translations[currentLang]?.bannedError || 'Your account is banned');
        return;
    }

    localStorage.setItem('currentUser', JSON.stringify({
        email: user.email,
        name: user.name || '',
        balance: user.balance || 0,
        premium: user.premium || false,
        premiumUntil: user.premiumUntil || null
    }));

    window.location.href = 'dashboard.html';
}

function handleRegister(email, password) {
    const users = getUsers();

    if (users.find(u => u.email === email)) {
        alert(translations[currentLang]?.registerExists || 'Email already registered');
        return;
    }

    users.push({
        email,
        password,
        name: '',
        balance: 0,
        premium: false,
        premiumUntil: null,
        banned: false,
        createdAt: new Date().toISOString()
    });

    saveUsers(users);
    alert(translations[currentLang]?.registerSuccess || 'Registration successful!');
    isLoginMode = true;
    applyLang();
}

// ============================================
// EVENTS
// ============================================
if (authForm) {
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) return;

        if (isLoginMode) {
            handleLogin(email, password);
        } else {
            handleRegister(email, password);
        }

        authForm.reset();
    });
}

if (switchModeLink) {
    switchModeLink.addEventListener('click', (e) => {
        e.preventDefault();
        isLoginMode = !isLoginMode;
        applyLang();
    });
}

// ============================================
// SOCIAL LOGIN (mock)
// ============================================
function socialLogin(provider) {
    const demoUsers = {
        'Google': 'google_user@demo.com',
        'ЮMoney': 'ymoney@demo.com',
        'Кошелёк': 'wallet@demo.com',
        'Azovsk': 'azovsk@demo.com'
    };

    const email = demoUsers[provider];
    if (!email) return;

    const users = getUsers();
    let user = users.find(u => u.email === email);

    if (!user) {
        user = {
            email,
            password: 'social_demo',
            name: provider + ' User',
            balance: 500,
            premium: false,
            premiumUntil: null,
            banned: false,
            createdAt: new Date().toISOString()
        };
        users.push(user);
        saveUsers(users);
    }

    if (user.banned) {
        alert(translations[currentLang]?.bannedError || 'Your account is banned');
        return;
    }

    localStorage.setItem('currentUser', JSON.stringify({
        email: user.email,
        name: user.name || '',
        balance: user.balance || 0,
        premium: user.premium || false,
        premiumUntil: user.premiumUntil || null
    }));

    window.location.href = 'dashboard.html';
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    applyLang();
});