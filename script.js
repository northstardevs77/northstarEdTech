/* ==========================================================================
   NORTHSTAR EdTech — Core Functional Script
   ========================================================================== */

// CHAPTER DATABASE WITH STRICT SEPARATION
const chaptersDatabase = {
    '10': {
        'gujarati': {
            'maths': [
                { id: '10_g_m_1', num: 1, title: 'વાસ્તવિક સંખ્યાઓ', link: 'https://linkvertise.com/' },
                { id: '10_g_m_2', num: 2, title: 'બહુપદીઓ', link: 'https://linkvertise.com/' },
                { id: '10_g_m_3', num: 3, title: 'દ્વિચલ સુરેખ સમીકરણ યુગ્મ', link: 'https://linkvertise.com/' },
                { id: '10_g_m_4', num: 4, title: 'દ્વિઘાત સમીકરણ', link: 'https://linkvertise.com/' },
                { id: '10_g_m_5', num: 5, title: 'સમાંતર શ્રેણી', link: 'https://linkvertise.com/' }
            ],
            'science': [
                { id: '10_g_s_1', num: 1, title: 'રાસાયણિક પ્રક્રિયાઓ અને સમીકરણો', link: 'https://linkvertise.com/' },
                { id: '10_g_s_2', num: 2, title: 'એસિડ, બેઇઝ અને ક્ષાર', link: 'https://linkvertise.com/' },
                { id: '10_g_s_3', num: 3, title: 'ધાતુઓ અને અધાતુઓ', link: 'https://linkvertise.com/' },
                { id: '10_g_s_4', num: 4, title: 'જૈવિક ક્રિયાઓ', link: 'https://linkvertise.com/' }
            ],
            'ss': [
                { id: '10_g_ss_1', num: 1, title: 'ભારતનો વારસો', link: 'https://linkvertise.com/' },
                { id: '10_g_ss_2', num: 2, title: 'ભારતનો સાંસ્કૃતિક વારસો: પરંપરાઓ', link: 'https://linkvertise.com/' },
                { id: '10_g_ss_3', num: 3, title: 'ભારતનો સાંસ્કૃતિક વારસો: શિલ્પ અને સ્થાપત્ય', link: 'https://linkvertise.com/' }
            ]
        },
        'english': {
            'maths': [
                { id: '10_e_m_1', num: 1, title: 'Real Numbers', link: 'https://linkvertise.com/' },
                { id: '10_e_m_2', num: 2, title: 'Polynomials', link: 'https://linkvertise.com/' },
                { id: '10_e_m_3', num: 3, title: 'Pair of Linear Equations in Two Variables', link: 'https://linkvertise.com/' }
            ],
            'science': [
                { id: '10_e_s_1', num: 1, title: 'Chemical Reactions and Equations', link: 'https://linkvertise.com/' },
                { id: '10_e_s_2', num: 2, title: 'Acids, Bases and Salts', link: 'https://linkvertise.com/' }
            ],
            'ss': [
                { id: '10_e_ss_1', num: 1, title: 'Heritage of India', link: 'https://linkvertise.com/' },
                { id: '10_e_ss_2', num: 2, title: 'Cultural Heritage of India: Traditional Arts', link: 'https://linkvertise.com/' }
            ]
        }
    },
    '9': {
        'gujarati': {
            'maths': [
                { id: '9_g_m_1', num: 1, title: 'સંખ્યા પદ્ધતિ', link: 'https://linkvertise.com/' },
                { id: '9_g_m_2', num: 2, title: 'બહુપદીઓ', link: 'https://linkvertise.com/' }
            ],
            'science': [
                { id: '9_g_s_1', num: 1, title: 'આપણી આસપાસમાં દ્રવ્ય', link: 'https://linkvertise.com/' },
                { id: '9_g_s_2', num: 2, title: 'શું આપણી આસપાસના દ્રવ્યો શુદ્ધ છે?', link: 'https://linkvertise.com/' }
            ],
            'ss': [
                { id: '9_g_ss_1', num: 1, title: 'ભારતમાં બ્રિટિશ સત્તાનો ઉદય', link: 'https://linkvertise.com/' }
            ]
        },
        'english': {
            'maths': [
                { id: '9_e_m_1', num: 1, title: 'Number Systems', link: 'https://linkvertise.com/' }
            ],
            'science': [
                { id: '9_e_s_1', num: 1, title: 'Matter in Our Surroundings', link: 'https://linkvertise.com/' }
            ],
            'ss': [
                { id: '9_e_ss_1', num: 1, title: 'Rise of British Rule in India', link: 'https://linkvertise.com/' }
            ]
        }
    }
};

// APP STATE
let state = {
    class: '10',
    medium: 'gujarati',
    subject: 'all',
    customLinks: JSON.parse(localStorage.getItem('northstar_custom_links') || '{}')
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    renderChapters();
});

// STATE CONTROL FUNCTIONS
function setClass(cls) {
    state.class = cls;
    document.querySelectorAll('#classSegment .segment-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.includes(cls));
    });
    renderChapters();
}

function setMedium(med) {
    state.medium = med;
    document.querySelectorAll('#mediumSegment .segment-btn').forEach(btn => {
        btn.classList.toggle('active', 
            (med === 'gujarati' && btn.innerText.includes('ગુજરાતી')) || 
            (med === 'english' && btn.innerText.includes('English'))
        );
    });
    renderChapters();
}

function setSubject(subj) {
    state.subject = subj;
    document.querySelectorAll('#subjectPills .pill').forEach(btn => {
        const text = btn.innerText.toLowerCase();
        btn.classList.toggle('active', 
            (subj === 'all' && text.includes('all')) ||
            (subj === 'maths' && text.includes('math')) ||
            (subj === 'science' && text.includes('science')) ||
            (subj === 'ss' && text.includes('social'))
        );
    });
    renderChapters();
}

// RENDER CHAPTER CARDS
function renderChapters() {
    const grid = document.getElementById('chapterGrid');
    const searchVal = document.getElementById('searchInput').value.toLowerCase();
    const title = document.getElementById('gridTitle');
    
    title.innerText = `Class ${state.class} — ${state.medium === 'gujarati' ? 'ગુજરાતી માધ્યમ' : 'English Medium'}`;
    grid.innerHTML = '';

    const mediumData = chaptersDatabase[state.class][state.medium];
    let count = 0;

    Object.keys(mediumData).forEach(subjKey => {
        if (state.subject !== 'all' && state.subject !== subjKey) return;

        const chapters = mediumData[subjKey];
        chapters.forEach(ch => {
            if (searchVal && !ch.title.toLowerCase().includes(searchVal)) return;

            count++;
            const linkUrl = state.customLinks[ch.id] || ch.link;
            const subjBadge = subjKey === 'maths' ? 'Mathematics' : subjKey === 'science' ? 'Science' : 'Social Science';

            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-top">
                    <span class="card-tag">${subjBadge}</span>
                    <h4>Ch ${ch.num}: ${ch.title}</h4>
                </div>
                <div class="card-footer">
                    <span class="card-info">GSEB / NCERT PDF</span>
                    <button class="btn-card-action" onclick="openLinkvertiseModal('${ch.title.replace(/'/g, "\\'")}', '${linkUrl}')">Download Notes ↗</button>
                </div>
            `;
            grid.appendChild(card);
        });
    });

    if (count === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No chapters found matching your criteria.</p>`;
    }
}

// LINKVERTISE MODAL
function openLinkvertiseModal(chapterTitle, targetUrl) {
    document.getElementById('modalChapterTitle').innerText = chapterTitle;
    document.getElementById('modalContinueBtn').href = targetUrl;
    document.getElementById('linkvertiseModal').classList.add('active');
}

function closeLinkvertiseModal() {
    document.getElementById('linkvertiseModal').classList.remove('active');
}

// FAQ TOGGLE
function toggleFaq(button) {
    const item = button.parentElement;
    item.classList.toggle('active');
}

// AUTHENTICATION MODAL FLOWS
function openAuthModal(tab) {
    document.getElementById('authModal').classList.add('active');
    switchAuthTab(tab);
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('active');
}

function switchAuthTab(tab) {
    document.getElementById('signinForm').classList.toggle('hidden', tab !== 'signin');
    document.getElementById('signupForm').classList.toggle('hidden', tab !== 'signup');
    document.getElementById('forgotForm').classList.toggle('hidden', tab !== 'forgot');
}

function handleAuthSubmit(type) {
    if (type === 'signin') {
        alert('Signed in successfully!');
        closeAuthModal();
    } else if (type === 'signup') {
        alert('Account created successfully! Welcome to NORTHSTAR EdTech.');
        closeAuthModal();
    } else if (type === 'forgot') {
        const otpSec = document.getElementById('otpSection');
        const btn = document.getElementById('forgotActionBtn');
        if (otpSec.classList.contains('hidden')) {
            otpSec.classList.remove('hidden');
            btn.innerText = 'Reset Password';
            alert('Demo OTP Sent! Enter 7777 to reset.');
        } else {
            const code = document.getElementById('otpCode').value;
            if (code === '7777') {
                alert('Password updated successfully! Please sign in.');
                switchAuthTab('signin');
            } else {
                alert('Invalid OTP code. Use 7777 for demo.');
            }
        }
    }
}

// ADMIN PANEL (PASSCODE LOGIC: RONALDO7)
function openAdminModal() {
    document.getElementById('adminModal').classList.add('active');
}

function closeAdminModal() {
    document.getElementById('adminModal').classList.remove('active');
}

function verifyAdminPasscode() {
    const pass = document.getElementById('adminPassInput').value;
    if (pass === 'RONALDO7') {
        document.getElementById('adminLockScreen').classList.add('hidden');
        document.getElementById('adminDashboard').classList.remove('hidden');
        populateAdminChapters();
        renderAdminSavedList();
    } else {
        alert('Incorrect Admin Passcode!');
    }
}

function lockAdminPortal() {
    document.getElementById('adminPassInput').value = '';
    document.getElementById('adminLockScreen').classList.remove('hidden');
    document.getElementById('adminDashboard').classList.add('hidden');
    closeAdminModal();
}

function populateAdminChapters() {
    const select = document.getElementById('adminChapterSelect');
    select.innerHTML = '';
    
    ['10', '9'].forEach(cls => {
        ['gujarati', 'english'].forEach(med => {
            ['maths', 'science', 'ss'].forEach(subj => {
                const list = chaptersDatabase[cls][med][subj] || [];
                list.forEach(ch => {
                    const opt = document.createElement('option');
                    opt.value = ch.id;
                    opt.innerText = `[Class ${cls} | ${med.toUpperCase()} | ${subj.toUpperCase()}] Ch ${ch.num}: ${ch.title}`;
                    select.appendChild(opt);
                });
            });
        });
    });
}

function saveAdminLink() {
    const id = document.getElementById('adminChapterSelect').value;
    const url = document.getElementById('adminUrlInput').value;

    if (!url) {
        alert('Please enter a valid Linkvertise URL');
        return;
    }

    state.customLinks[id] = url;
    localStorage.setItem('northstar_custom_links', JSON.stringify(state.customLinks));
    alert('Linkvertise target URL updated successfully!');
    renderAdminSavedList();
    renderChapters();
}

function renderAdminSavedList() {
    const ul = document.getElementById('adminSavedList');
    ul.innerHTML = '';
    const keys = Object.keys(state.customLinks);

    if (keys.length === 0) {
        ul.innerHTML = '<li style="font-size:0.8rem; color: var(--text-muted);">No custom links saved yet.</li>';
        return;
    }

    keys.forEach(k => {
        const li = document.createElement('li');
        li.style.fontSize = '0.8rem';
        li.style.marginBottom = '6px';
        li.innerText = `${k}: ${state.customLinks[k]}`;
        ul.appendChild(li);
    });
}