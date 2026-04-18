/**
 * 用語集アプリケーションロジック
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. 用語データの定義 (本来は外部JSONなどから取得するのが理想的)
    const terms = [
        // --- Core ---
        { id: 'zos-intro', title: 'z/OS 概要', file: 'zos-intro.html', category: 'Core' },
        { id: 'zos-mainframe', title: 'Mainframe', file: 'zos-mainframe.html', category: 'Core' },
        { id: 'zos-lpar', title: 'LPAR', file: 'zos-lpar.html', category: 'Core' },
        { id: 'zos-ipl', title: 'IPL', file: 'zos-ipl.html', category: 'Core' },
        { id: 'zos-tso', title: 'TSO/E', file: 'zos-tso.html', category: 'Core' },
        { id: 'zos-ispf', title: 'ISPF', file: 'zos-ispf.html', category: 'Core' },
        { id: 'zos-sysplex', title: 'Parallel Sysplex', file: 'zos-sysplex.html', category: 'Core' },
        { id: 'zos-cf', title: 'Coupling Facility', file: 'zos-cf.html', category: 'Core' },
        { id: 'zos-hmc', title: 'HMC', file: 'zos-hmc.html', category: 'Core' },
        { id: 'zos-z16', title: 'IBM z16', file: 'zos-z16.html', category: 'Core' },
        { id: 'zos-cpc', title: 'CPC', file: 'zos-cpc.html', category: 'Core' },
        { id: 'zos-se', title: 'Support Element', file: 'zos-se.html', category: 'Core' },
        { id: 'zos-hsa', title: 'HSA', file: 'zos-hsa.html', category: 'Core' },
        { id: 'zos-pr-sm', title: 'PR/SM', file: 'zos-pr-sm.html', category: 'Core' },
        { id: 'zos-parmlib', title: 'PARMLIB', file: 'zos-parmlib.html', category: 'Core' },
        { id: 'zos-nucleus', title: 'NUCLEUS', file: 'zos-nucleus.html', category: 'Core' },
        { id: 'zos-address-space', title: 'Address Space', file: 'zos-address-space.html', category: 'Core' },
        { id: 'zos-psw', title: 'PSW', file: 'zos-psw.html', category: 'Core' },
        { id: 'zos-tcb', title: 'TCB', file: 'zos-tcb.html', category: 'Core' },
        { id: 'zos-srb', title: 'SRB', file: 'zos-srb.html', category: 'Core' },
        { id: 'zos-asid', title: 'ASID', file: 'zos-asid.html', category: 'Core' },
        { id: 'zos-abend', title: 'ABEND', file: 'zos-abend.html', category: 'Core' },
        { id: 'zos-csa', title: 'CSA', file: 'zos-csa.html', category: 'Core' },
        { id: 'zos-sqa', title: 'SQA', file: 'zos-sqa.html', category: 'Core' },
        { id: 'zos-wait-state', title: 'Wait State', file: 'zos-wait-state.html', category: 'Core' },
        { id: 'zos-ziip', title: 'zIIP', file: 'zos-ziip.html', category: 'Core' },
        { id: 'zos-z17', title: 'IBM z17', file: 'zos-z17.html', category: 'Core' },
        { id: 'zos-cod', title: 'Capacity on Demand', file: 'zos-cod.html', category: 'Core' },

        // --- Storage ---
        { id: 'zos-dataset', title: 'Dataset', file: 'zos-dataset.html', category: 'Storage' },
        { id: 'zos-pds', title: 'PDS/PDSE', file: 'zos-pds.html', category: 'Storage' },
        { id: 'zos-vsam', title: 'VSAM', file: 'zos-vsam.html', category: 'Storage' },
        { id: 'zos-catalog', title: 'Catalog', file: 'zos-catalog.html', category: 'Storage' },
        { id: 'zos-catalog-uncatalog', title: 'Catalog / Uncatalog', file: 'zos-catalog-uncatalog.html', category: 'Storage' },
        { id: 'zos-gdg', title: 'GDG', file: 'zos-gdg.html', category: 'Storage' },
        { id: 'zos-lun', title: 'LUN', file: 'zos-lun.html', category: 'Storage' },
        { id: 'zos-lss', title: 'LSS', file: 'zos-lss.html', category: 'Storage' },
        { id: 'zos-dasd', title: 'DASD', file: 'zos-dasd.html', category: 'Storage' },
        { id: 'zos-vtoc', title: 'VTOC', file: 'zos-vtoc.html', category: 'Storage' },
        { id: 'zos-vvds', title: 'VVDS', file: 'zos-vvds.html', category: 'Storage' },
        { id: 'zos-icf', title: 'ICF Catalog', file: 'zos-icf.html', category: 'Storage' },
        { id: 'zos-sms', title: 'SMS', file: 'zos-sms.html', category: 'Storage' },
        { id: 'zos-dfsms', title: 'DFSMS', file: 'zos-dfsms.html', category: 'Storage' },
        { id: 'zos-hsm', title: 'DFSMShsm', file: 'zos-hsm.html', category: 'Storage' },
        { id: 'zos-rmm', title: 'DFSMSrmm', file: 'zos-rmm.html', category: 'Storage' },
        { id: 'zos-flashcopy', title: 'FlashCopy', file: 'zos-flashcopy.html', category: 'Storage' },
        { id: 'zos-pprc', title: 'PPRC (Mirroring)', file: 'zos-pprc.html', category: 'Storage' },
        { id: 'zos-ds8000', title: 'DS8000', file: 'zos-ds8000.html', category: 'Storage' },
        { id: 'zos-ts7700', title: 'TS7700 (Tape)', file: 'zos-ts7700.html', category: 'Storage' },
        { id: 'zos-volume', title: 'Volume (VOLSER)', file: 'zos-volume.html', category: 'Storage' },
        { id: 'zos-unit', title: 'Unit Address', file: 'zos-unit.html', category: 'Storage' },
        { id: 'zos-prialoc', title: 'Primary Allocation', file: 'zos-prialoc.html', category: 'Storage' },
        { id: 'zos-secaloc', title: 'Secondary Allocation', file: 'zos-secaloc.html', category: 'Storage' },
        { id: 'zos-rls', title: 'VSAM RLS', file: 'zos-rls.html', category: 'Storage' },

        // --- Subsystems ---
        { id: 'zos-sdsf', title: 'SDSF', file: 'zos-sdsf.html', category: 'Subsystems' },
        { id: 'zos-jes2', title: 'JES2', file: 'zos-jes2.html', category: 'Subsystems' },
        { id: 'zos-zws', title: 'ZWS (TWS/OPC)', file: 'zos-zws.html', category: 'Subsystems' },
        { id: 'zos-jes3', title: 'JES3', file: 'zos-jes3.html', category: 'Subsystems' },
        { id: 'zos-wlm', title: 'WLM', file: 'zos-wlm.html', category: 'Subsystems' },
        { id: 'zos-smf', title: 'SMF', file: 'zos-smf.html', category: 'Subsystems' },
        { id: 'zos-initiator', title: 'Initiator', file: 'zos-initiator.html', category: 'Subsystems' },
        { id: 'zos-spool', title: 'Spool', file: 'zos-spool.html', category: 'Subsystems' },
        { id: 'zos-grs', title: 'GRS', file: 'zos-grs.html', category: 'Subsystems' },
        { id: 'zos-xcf', title: 'XCF', file: 'zos-xcf.html', category: 'Subsystems' },
        { id: 'zos-xes', title: 'XES', file: 'zos-xes.html', category: 'Subsystems' },
        { id: 'zos-arm', title: 'ARM', file: 'zos-arm.html', category: 'Subsystems' },
        { id: 'zos-stp', title: 'STP (Time)', file: 'zos-stp.html', category: 'Subsystems' },
        { id: 'zos-rmf', title: 'RMF', file: 'zos-rmf.html', category: 'Subsystems' },
        { id: 'zos-vlf', title: 'VLF', file: 'zos-vlf.html', category: 'Subsystems' },
        { id: 'zos-lla', title: 'LLA', file: 'zos-lla.html', category: 'Subsystems' },
        { id: 'zos-omvs', title: 'OMVS', file: 'zos-omvs.html', category: 'Subsystems' },

        // --- Middleware ---
        { id: 'zos-db2', title: 'DB2 for z/OS', file: 'zos-db2.html', category: 'Middleware' },
        { id: 'zos-bind', title: 'BIND / AUTO BIND', file: 'zos-bind.html', category: 'Middleware' },
        { id: 'zos-load-unload', title: 'LOAD / UNLOAD', file: 'zos-load-unload.html', category: 'Middleware' },
        { id: 'zos-cics', title: 'CICS', file: 'zos-cics.html', category: 'Middleware' },
        { id: 'zos-ims', title: 'IMS', file: 'zos-ims.html', category: 'Middleware' },
        { id: 'zos-mq', title: 'MQ', file: 'zos-mq.html', category: 'Middleware' },
        { id: 'zos-was', title: 'WebSphere Application Server', file: 'zos-was.html', category: 'Middleware' },
        { id: 'zos-datasharing', title: 'Data Sharing', file: 'zos-datasharing.html', category: 'Middleware' },

        // --- Development ---
        { id: 'zos-jcl', title: 'JCL', file: 'zos-jcl.html', category: 'Development' },
        { id: 'zos-rexx', title: 'REXX', file: 'zos-rexx.html', category: 'Development' },
        { id: 'zos-clist', title: 'CLIST', file: 'zos-clist.html', category: 'Development' },
        { id: 'zos-cobol', title: 'COBOL', file: 'zos-cobol.html', category: 'Development' },
        { id: 'zos-pli', title: 'PL/I', file: 'zos-pli.html', category: 'Development' },
        { id: 'zos-assembler', title: 'Assembler (HLASM)', file: 'zos-assembler.html', category: 'Development' },
        { id: 'zos-dfsyl', title: 'DFSORT', file: 'zos-dfsort.html', category: 'Development' },
        { id: 'zos-zsort', title: 'zSort', file: 'zos-zsort.html', category: 'Development' },
        { id: 'zos-idcams', title: 'IDCAMS', file: 'zos-idcams.html', category: 'Development' },
        { id: 'zos-iebgener', title: 'IEBGENER', file: 'zos-iebgener.html', category: 'Development' },
        { id: 'zos-iebcopy', title: 'IEBCOPY', file: 'zos-iebcopy.html', category: 'Development' },
        { id: 'zos-amaspzap', title: 'AMASPZAP', file: 'zos-amaspzap.html', category: 'Development' },
        { id: 'zos-steplib', title: 'STEPLIB', file: 'zos-steplib.html', category: 'Development' },
        { id: 'zos-joblib', title: 'JOBLIB', file: 'zos-joblib.html', category: 'Development' },
        { id: 'zos-proclib', title: 'PROCLIB', file: 'zos-proclib.html', category: 'Development' },
        { id: 'zos-sysout', title: 'SYSOUT', file: 'zos-sysout.html', category: 'Development' },
        { id: 'zos-loadlib', title: 'LOADLIB', file: 'zos-loadlib.html', category: 'Development' },
        { id: 'zos-lpa', title: 'LPA (Link Pack Area)', file: 'zos-lpa.html', category: 'Development' },

        // --- Net & Sec ---
        { id: 'zos-racf', title: 'RACF', file: 'zos-racf.html', category: 'Net & Sec' },
        { id: 'zos-vtam', title: 'VTAM', file: 'zos-vtam.html', category: 'Net & Sec' },
        { id: 'zos-tcpip', title: 'TCP/IP', file: 'zos-tcpip.html', category: 'Net & Sec' },
        { id: 'zos-osa', title: 'OSA Adapter', file: 'zos-osa.html', category: 'Net & Sec' },
        { id: 'zos-hiper', title: 'HiperSockets', file: 'zos-hiper.html', category: 'Net & Sec' },
        { id: 'zos-fcip', title: 'FCIP', file: 'zos-fcip.html', category: 'Net & Sec' },
        { id: 'zos-zert', title: 'zERT (Encryption)', file: 'zos-zert.html', category: 'Net & Sec' },
        { id: 'zos-saf', title: 'SAF', file: 'zos-saf.html', category: 'Net & Sec' },
        { id: 'zos-at-tls', title: 'AT-TLS', file: 'zos-at-tls.html', category: 'Net & Sec' },
        { id: 'zos-tn3270', title: 'TN3270', file: 'zos-tn3270.html', category: 'Net & Sec' },

        // --- Modernization ---
        { id: 'zos-uss', title: 'USS', file: 'zos-uss.html', category: 'Modernization' },
        { id: 'zos-zlinux', title: 'Linux on IBM Z', file: 'zos-zlinux.html', category: 'Modernization' },
        { id: 'zos-connect', title: 'z/OS Connect', file: 'zos-connect.html', category: 'Modernization' },
        { id: 'zos-mf', title: 'z/OSMF', file: 'zos-mf.html', category: 'Modernization' },
        { id: 'zos-zcx', title: 'zCX (Containers)', file: 'zos-zcx.html', category: 'Modernization' },
        { id: 'zos-zfs', title: 'zFS', file: 'zos-zfs.html', category: 'Modernization' },
        { id: 'zos-python', title: 'Python on z/OS', file: 'zos-python.html', category: 'Modernization' },
        { id: 'zos-nodejs', title: 'Node.js on z/OS', file: 'zos-nodejs.html', category: 'Modernization' },
        { id: 'zos-tfp', title: 'Tailored Fit Pricing', file: 'zos-tfp.html', category: 'Modernization' },
        { id: 'zos-wlc', title: 'Workload License Charges', file: 'zos-wlc.html', category: 'Modernization' }
    ];

    const termList = document.getElementById('term-list');
    const categoryChips = document.getElementById('category-chips');
    const contentFrame = document.getElementById('content-frame');
    const welcomeOverlay = document.getElementById('welcome-overlay');
    const searchInput = document.getElementById('term-search');
    const loader = document.getElementById('content-loader');

    let activeCategory = 'All';

    // 2. フィルタリングとリスト生成
    function renderTermList(filter = '') {
        termList.innerHTML = '';
        const filteredTerms = terms.filter(t => {
            const matchesSearch = t.title.toLowerCase().includes(filter.toLowerCase()) || 
                                 t.id.toLowerCase().includes(filter.toLowerCase());
            const matchesCategory = activeCategory === 'All' || t.category === activeCategory;
            return matchesSearch && matchesCategory;
        });

        if (filteredTerms.length === 0) {
            termList.innerHTML = '<li style="padding:1rem; color:var(--text-secondary); font-size:0.8rem;">見つかりませんでした</li>';
            return;
        }

        filteredTerms.forEach(term => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = term.title;
            a.href = `#${term.id}`;
            a.dataset.id = term.id;
            
            a.addEventListener('click', (e) => {
                e.preventDefault();
                loadContent(term);
            });

            li.appendChild(a);
            termList.appendChild(li);
        });
    }

    // 3. コンテンツの読み込み (iframe)
    function loadContent(term) {
        // UI更新
        document.querySelectorAll('.term-nav a').forEach(el => el.classList.remove('active'));
        const activeLink = document.querySelector(`.term-nav a[data-id="${term.id}"]`);
        if (activeLink) activeLink.classList.add('active');

        loader.classList.remove('hidden');
        contentFrame.style.opacity = '0';
        welcomeOverlay.classList.add('hidden');

        // iframeのsrcを更新
        contentFrame.src = `content/${term.file}`;

        // 読み込み完了時の処理
        contentFrame.onload = () => {
            loader.classList.add('hidden');
            contentFrame.style.opacity = '1';
            // URLハッシュの更新
            window.location.hash = term.id;
        };
    }

    // 4. 検索機能
    searchInput.addEventListener('input', (e) => {
        renderTermList(e.target.value);
    });

    // 5. 初期表示とルーティング
    function handleRouting() {
        const hash = window.location.hash.substring(1);
        const term = terms.find(t => t.id === hash);
        if (term) {
            loadContent(term);
        } else {
            renderTermList();
        }
    }

    // カテゴリーチップの生成
    function renderCategoryChips() {
        const categories = ['All', ...new Set(terms.map(t => t.category))];
        categoryChips.innerHTML = '';
        
        categories.forEach(cat => {
            const span = document.createElement('span');
            span.className = `chip ${activeCategory === cat ? 'active' : ''}`;
            span.textContent = cat;
            span.addEventListener('click', () => {
                activeCategory = cat;
                renderCategoryChips();
                renderTermList(searchInput.value);
            });
            categoryChips.appendChild(span);
        });
    }

    renderCategoryChips();
    renderTermList();
    handleRouting();

    // ブラウザの「戻る/進む」に対応
    window.addEventListener('hashchange', handleRouting);
});
