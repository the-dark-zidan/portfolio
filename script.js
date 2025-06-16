
const PORTFOLIO_CONFIG = {
    currentPage: 'introduction',
    animationSpeed: 300,
    theme: 'professional',
    isLoading: false
};

// Base de données des projets académiques
const PROJETS_ACADEMIQUES = {
        sae11: {
        nom: "Infrastructure Réseau Entreprise",
        periode: "SAE 1.2 - Septembre 2024",
        contexte: "Conception complète d'une infrastructure réseau pour une PME de 50 employés, avec segmentation par services et implémentation de solutions de sécurité avancées.",
        objectifs_techniques: [
            "Planification d'un adressage IPv4 hiérarchique avec VLSM",
            "Configuration de VLANs par département (RH, Comptabilité, IT)",
            "Implémentation du protocole OSPF pour le routage dynamique",
            "Mise en place de politiques de sécurité avec ACLs",
            "Configuration de serveurs DHCP redondants"
        ],
        ma_participation: "En tant que responsable de l'architecture réseau, j'ai conçu le plan d'adressage complet et configuré l'ensemble des équipements Cisco. Mon travail s'est focalisé sur :",
        taches_realisees: [
            "Analyse des besoins et dimensionnement du réseau",
            "Configuration des commutateurs multicouches Cisco 3750",
            "Paramétrage du routage OSPF sur routeurs 2911",
            "Tests de connectivité et validation des performances",
            "Documentation technique complète de l'infrastructure"
        ],
        preuves_travail: [
            "Schéma détaillé de l'architecture réseau",
            "Fichiers de configuration Cisco complets"
        ],
        photo_projet: "https://ugostanciu.github.io/portfolio/images/network_infra.png",
        extrait_config: `! Configuration OSPF sur routeur principal
router ospf 1
 network 192.168.10.0 0.0.0.255 area 0
 network 192.168.20.0 0.0.0.255 area 1
 network 192.168.30.0 0.0.0.255 area 1
 area 1 stub
!
! Configuration VLAN sur switch principal
vlan 10
 name ADMINISTRATION
vlan 20
 name COMPTABILITE  
vlan 30
 name TECHNIQUE
!
interface vlan 10
 ip address 192.168.10.1 255.255.255.0
 ip helper-address 192.168.100.10`,
        bilan_personnel: "Ce projet m'a permis d'approfondir mes compétences en conception réseau et en configuration d'équipements Cisco. La principale difficulté rencontrée concernait l'optimisation du routage OSPF, notamment la définition des areas pour minimiser le trafic LSA. J'ai résolu cette problématique en implémentant des areas stub et en ajustant les métriques OSPF. Cette expérience m'a également sensibilisé à l'importance de la documentation technique - j'ai créé des schémas détaillés et des procédures de maintenance. Pour un futur projet similaire, je commencerais par une phase de monitoring plus approfondie pour mieux évaluer les flux de données entre services.",
        competences_validees: ["UE1", "UE2"]
    },

    cybersecurite: {
        nom: "Audit de Sécurité et Sensibilisation",
        periode: "SAE 1.1 - Octobre 2024", 
        contexte: "Réalisation d'un audit de sécurité complet sur l'infrastructure du laboratoire, suivi d'une campagne de sensibilisation aux bonnes pratiques cybersécurité auprès des étudiants et du personnel.",
        objectifs_techniques: [
            "Audit des politiques de mots de passe existantes",
            "Test de pénétration sur services SSH",
            "Analyse des vulnérabilités système avec Nessus",
            "Formation aux outils de sécurité (Wireshark, Nmap)",
            "Élaboration de procédures de sécurité"
        ],
        ma_participation: "J'ai pris en charge la partie audit technique et la création du matériel de formation. Mes responsabilités incluaient :",
        taches_realisees: [
            "Scanning réseau et identification des services exposés",
            "Tests d'intrusion contrôlés sur machines dédiées",
            "Analyse des logs de sécurité avec Splunk",
            "Création de supports de formation interactifs",
            "Rédaction du rapport d'audit final"
        ],
        preuves_travail: [
            "Rapport d'audit de sécurité (extrait anonymisé)",
            "Captures d'écran des outils utilisés"
        ],
        photo_projet: "https://ugostanciu.github.io/portfolio/images/security_audit.png",
        extrait_config: `# Script de scan automatisé Nmap
#!/bin/bash
# Audit réseau automatisé
echo "Démarrage de l'audit réseau..."
nmap -sS -O -sV 192.168.1.0/24 > scan_results.txt
nmap --script vuln 192.168.1.0/24 >> vuln_scan.txt
echo "Analyse terminée - Résultats sauvegardés"`,
        bilan_personnel: "Cette SAE m'a ouvert les yeux sur l'importance cruciale de la cybersécurité dans les infrastructures modernes. La phase d'audit a révélé plusieurs vulnérabilités critiques, notamment des services obsolètes et des configurations par défaut non modifiées. Le défi principal était de mener les tests sans impacter le fonctionnement normal du réseau. J'ai développé une méthodologie rigoureuse avec des créneaux horaires dédiés et des environnements isolés. La partie sensibilisation m'a appris l'importance de la pédagogie en sécurité - adapter le discours technique selon l'audience. Cette expérience m'a convaincu de poursuivre une spécialisation en cybersécurité.",
        competences_validees: ["UE1"]
    },

    application_web: {
        nom: "Application de Monitoring Réseau",
        periode: "SAE 2.3 - Mars 2024",
        contexte: "Développement d'une application web responsive permettant de visualiser en temps réel l'état des équipements réseau du laboratoire, avec alertes automatiques et historique des performances.",
        objectifs_techniques: [
            "Interface web responsive avec dashboard interactif",
            "Récupération de données via protocole SNMP",
            "Base de données pour historisation des métriques",
            "Système d'alertes par email et SMS",
            "Graphiques dynamiques avec Chart.js"
        ],
        ma_participation: "Développement complet de l'application, de l'architecture backend à l'interface utilisateur :",
        taches_realisees: [
            "Conception de l'architecture MVC en PHP",
            "Développement des requêtes SNMP pour collecte de données",
            "Création de l'interface utilisateur avec HTML5/CSS3/JavaScript",
            "Implémentation du système d'alertes automatiques",
            "Tests d'intégration et déploiement sur serveur Apache"
        ],
        preuves_travail: [
            "Code source de l'application (GitHub)",
            "Démonstration de l'interface web"
        ],
        photo_projet: "https://ugostanciu.github.io/portfolio/images/monitoring_app.png",
        extrait_config: `// Fonction de collecte de données SNMP
function collecterDonneesEquipement($ip_equipement) {
    $session = new SNMP(SNMP::VERSION_2c, $ip_equipement, 'public');
    
    $data = array(
        'cpu_usage' => $session->get('1.3.6.1.4.1.9.2.1.58.0'),
        'memory_usage' => $session->get('1.3.6.1.4.1.9.2.1.8.0'),
        'interface_status' => $session->walk('1.3.6.1.2.1.2.2.1.8'),
        'uptime' => $session->get('1.3.6.1.2.1.1.3.0')
    );
    
    return $data;
}`,
        bilan_personnel: "Ce projet m'a permis de combiner mes compétences réseau avec le développement web, créant une solution pratique répondant à un vrai besoin. La difficulté principale résidait dans la gestion des timeouts SNMP et la gestion des équipements non répondants. J'ai implémenté un système de retry avec backoff exponentiel pour améliorer la fiabilité. Le développement de l'interface m'a fait découvrir les frameworks CSS modernes et les bonnes pratiques UX/UI. La partie la plus gratifiante était de voir l'application utilisée quotidiennement par les techniciens du laboratoire. Pour l'améliorer, j'ajouterais une API REST pour permettre l'intégration avec d'autres outils de supervision.",
        competences_validees: ["UE3"]
    },

    integration_systeme: {
        nom: "Intégration Système Hybride",
        periode: "SAE 2.1 - Janvier 2024",
        contexte: "Mise en place d'un environnement système hybride Linux/Windows avec services d'annuaire centralisés, partages de fichiers inter-plateformes et solution de sauvegarde automatisée.",
        objectifs_techniques: [
            "Déploiement d'Active Directory sur Windows Server 2022",
            "Configuration de Samba sur serveurs Linux Ubuntu",
            "Synchronisation LDAP entre systèmes",
            "Scripts de sauvegarde automatisée",
            "Politique de sécurité unifiée"
        ],
        ma_participation: "Conception et implémentation de l'intégration inter-systèmes :",
        taches_realisees: [
            "Installation et configuration des contrôleurs de domaine",
            "Paramétrage de la synchronisation LDAP bidirectionnelle",
            "Développement de scripts PowerShell et Bash pour l'automatisation",
            "Configuration des GPO pour la sécurité unifiée",
            "Tests de fonctionnement et documentation utilisateur"
        ],
        preuves_travail: [
            "Scripts d'automatisation développés",
            "Documentation technique de l'intégration"
        ],
        photo_projet: "https://ugostanciu.github.io/portfolio/images/hybrid_system.png",
        extrait_config: `# Script de synchronisation LDAP
#!/bin/bash
# Synchronisation des utilisateurs AD vers LDAP Linux
ldapsearch -x -H ldap://dc.local -D "CN=admin,DC=local" \\
  -w $AD_PASSWORD "(objectClass=user)" > users_ad.ldif

# Traitement et import vers LDAP Linux  
python3 process_users.py users_ad.ldif | \\
ldapadd -x -D "cn=admin,dc=lab,dc=local" -w $LDAP_PASSWORD`,
        bilan_personnel: "Cette SAE m'a confronté aux enjeux réels de l'intégration système en environnement hétérogène. La complexité principale venait de la gestion des différences de format entre Active Directory et OpenLDAP. J'ai développé des scripts Python pour transformer automatiquement les données utilisateur. La partie la plus technique concernait la synchronisation des mots de passe - j'ai implémenté une solution sécurisée avec chiffrement des communications. Ce projet m'a fait comprendre l'importance de l'automatisation en administration système et m'a donné envie d'approfondir les technologies de containerisation comme Docker pour simplifier ces déploiements.",
        competences_validees: ["UE1", "UE2"]
    },

    analyse_signaux: {
        nom: "Analyse de Signaux Radioélectriques",
        periode: "SAE 2.2 - Février 2024",
        contexte: "Étude approfondie des signaux de télécommunications locaux en utilisant des équipements de mesure professionnels (analyseur de spectre, RTL-SDR) et développement d'outils d'analyse sous MATLAB.",
        objectifs_techniques: [
            "Mesures sur le terrain avec analyseur de spectre",
            "Programmation d'outils d'analyse sous MATLAB",
            "Décodage de signaux numériques",
            "Cartographie de la couverture radioélectrique",
            "Analyse de la qualité des liaisons"
        ],
        ma_participation: "Développement des outils d'analyse et traitement des mesures :",
        taches_realisees: [
            "Programmation des algorithmes d'analyse spectrale sous MATLAB",
            "Réalisation des campagnes de mesures sur le terrain",
            "Développement d'interfaces graphiques pour la visualisation",
            "Traitement statistique des données collectées",
            "Rédaction du rapport technique d'analyse"
        ],
        preuves_travail: [
            "Code MATLAB des outils développés",
            "Certificat MATLAB Onramp validé"
        ],
        photo_projet: "https://ugostanciu.github.io/portfolio/images/signal_analysis.png",
        extrait_config: `% Analyse spectrale automatisée en MATLAB
function analyseSpectrale(signal, fe)
    % Calcul de la FFT
    N = length(signal);
    Y = fft(signal);
    f = (0:N-1)*(fe/N);
    
    % Détection des pics
    [peaks, locs] = findpeaks(abs(Y), 'MinPeakHeight', 0.1*max(abs(Y)));
    
    % Affichage des résultats
    figure;
    plot(f, abs(Y));
    hold on;
    plot(f(locs), peaks, 'ro');
    title('Analyse Spectrale du Signal');
    xlabel('Fréquence (Hz)');
end`,
        bilan_personnel: "Cette SAE m'a fait découvrir l'analyse des signaux sous un angle très pratique. Le passage de la théorie à la pratique avec des équipements réels était passionnant mais exigeant. Les mesures sur le terrain m'ont appris la rigueur nécessaire pour obtenir des données exploitables - importance de l'étalonnage, influence de l'environnement, etc. Le développement sous MATLAB m'a permis d'automatiser les analyses répétitives et de créer des visualisations pertinentes. Une difficulté était l'interprétation des résultats - distinguer les signaux utiles du bruit de fond. Cette expérience m'a donné envie d'approfondir le traitement numérique du signal et ses applications en télécommunications.",
        competences_validees: ["UE2"]
    },

    projet_integratif: {
        nom: "Projet Intégratif - Solution Complète",
        periode: "SAE 2.4 - Avril-Mai 2024",
        contexte: "Projet de synthèse mobilisant toutes les compétences acquises : conception d'une solution complète pour une startup incluant infrastructure réseau, services cloud, application métier et stratégie de sécurité.",
        objectifs_techniques: [
            "Architecture réseau évolutive (LAN/WAN/VPN)",
            "Services cloud hybrides (AWS + infrastructure locale)",
            "Application web de gestion CRM",
            "Politique de sécurité globale",
            "Plan de continuité d'activité"
        ],
        ma_participation: "Chef de projet technique, coordination de l'équipe de 4 personnes :",
        taches_realisees: [
            "Planification du projet et répartition des tâches",
            "Architecture de l'infrastructure réseau complète",
            "Intégration des solutions cloud et on-premise",
            "Coordination avec les développeurs pour l'application CRM",
            "Présentation finale devant un jury professionnel"
        ],
        preuves_travail: [
            "Dossier technique complet du projet",
            "Présentation PowerPoint de soutenance"
        ],
        photo_projet: "https://ugostanciu.github.io/portfolio/images/integration_project.png",
        extrait_config: `# Configuration VPN site-to-site
crypto isakmp policy 10
 encr aes 256 
 hash sha256
 authentication pre-share
 group 14
!
crypto ipsec transform-set AWS_TRANSFORM esp-aes 256 esp-sha256-hmac
!
crypto map AWS_VPN 10 ipsec-isakmp 
 set peer 54.230.45.12
 set transform-set AWS_TRANSFORM
 match address VPN_TRAFFIC`,
        bilan_personnel: "Ce projet final était l'aboutissement de ma formation - l'occasion de démontrer ma capacité à mener un projet technique complexe de A à Z. La gestion d'équipe était un défi nouveau pour moi, nécessitant de concilier aspects techniques et relationnels. J'ai appris à déléguer tout en gardant une vision d'ensemble du projet. La partie la plus enrichissante était la présentation devant des professionnels qui ont apprécié nos choix techniques et notre capacité à argumenter nos décisions. Une difficulté majeure était l'intégration des différentes briques technologiques - chaque composant fonctionnait isolément mais l'interopérabilité demandait des ajustements fins. Cette expérience m'a confirmé mon intérêt pour l'architecture système et le management technique.",
        competences_validees: ["UE1", "UE2", "UE3"]
    }
};

// Base de données des compétences détaillées
const COMPETENCES_DETAILLEES = {
    UE1: {
        nom: "Administrer les réseaux et l'Internet",
        description: "Gestion et configuration des infrastructures réseau, protocoles de communication, et services Internet",
        niveaux: {
            1: "Installer un poste de travail",
            2: "Configurer les services réseau",
            3: "Administrer un réseau complexe"
        },
        mots_cles: ["Routage", "Commutation", "TCP/IP", "DHCP", "DNS", "VPN", "Firewall", "QoS"]
    },
    UE2: {
        nom: "Connecter les entreprises et les usagers",
        description: "Conception et déploiement de solutions de connectivité pour les entreprises et particuliers",
        niveaux: {
            1: "Déployer des réseaux locaux",
            2: "Interconnecter des sites distants",
            3: "Concevoir l'architecture d'un réseau d'opérateur"
        },
        mots_cles: ["Fibre optique", "Wireless", "WAN", "MPLS", "BGP", "Topologie", "Redondance", "Performance"]
    },
    UE3: {
        nom: "Créer des outils et applications informatiques",
        description: "Développement d'applications et d'outils adaptés aux besoins des métiers du réseau",
        niveaux: {
            1: "Programmer des scripts d'automatisation",
            2: "Développer des applications métier",
            3: "Concevoir des solutions logicielles complexes"
        },
        mots_cles: ["Python", "JavaScript", "API", "Base de données", "Interface web", "Automatisation", "DevOps", "Monitoring"]
    }
};

// Initialisation de l'application au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    demarrerPortfolio();
    configurerNavigation();
    initialiserAnimations();
    configurerGraphiques();
    configurerEvenementsModale();
    configurerFormulaires();
    afficherSection('introduction');
});

// Fonction principale de démarrage
function demarrerPortfolio() {
    console.log('🚀 Démarrage du portfolio - Version 2024');
    console.log('📊 Chargement des données projets...');
    console.log('🎯 Configuration de l\'interface utilisateur...');
    
    // Configuration des barres de progression
    reinitialiserBarresProgression();
    
    // Animation d'entrée
    setTimeout(() => {
        document.body.classList.add('portfolio-loaded');
    }, 500);
}

// Système de navigation entre sections
function configurerNavigation() {
    const liensNavigation = document.querySelectorAll('.menu-navigation a');
    const boutonsAction = document.querySelectorAll('.bouton-action');
    
    // Navigation principale
    liensNavigation.forEach(lien => {
        lien.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionCible = lien.getAttribute('data-section');
            if (sectionCible) {
                afficherSection(sectionCible);
                mettreAJourNavigationActive(lien);
            }
        });
    });
    
    // Boutons d'action CTA
    boutonsAction.forEach(bouton => {
        if (bouton) {
            bouton.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionCible = bouton.getAttribute('data-section');
                if (sectionCible) {
                    afficherSection(sectionCible);
                }
            });
        }
    });
}

// Affichage des sections avec transitions
function afficherSection(idSection) {
    // Masquer toutes les sections
    document.querySelectorAll('.section-contenu').forEach(section => {
        section.classList.remove('section-active');
    });
    
    // Afficher la section demandée
    const sectionCible = document.getElementById(idSection);
    if (sectionCible) {
        sectionCible.classList.add('section-active');
        sectionCible.classList.add('animation-entree');
        PORTFOLIO_CONFIG.currentPage = idSection;
        
        // Animations spécifiques selon la section
        if (idSection === 'competences') {
            setTimeout(() => animerBarresProgression(), 300);
        }
        
        // Scroll vers le haut de la section
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Gestion de l'affichage du contenu d'accueil
    if (idSection === 'introduction') {
        document.body.classList.remove('masquer-accueil');
    } else {
        document.body.classList.add('masquer-accueil');
    }
}

function mettreAJourNavigationActive(lienActif) {
    document.querySelectorAll('.menu-navigation a').forEach(lien => {
        lien.classList.remove('actif');
    });
    lienActif.classList.add('actif');
}

// Système d'animations
function initialiserAnimations() {
    // Observer pour les animations au scroll
    const observateur = new IntersectionObserver((entrees) => {
        entrees.forEach(entree => {
            if (entree.isIntersecting) {
                const barresProgression = entree.target.querySelectorAll('.barre-progression');
                barresProgression.forEach(barre => {
                    const pourcentage = barre.getAttribute('data-progression');
                    barre.style.width = pourcentage + '%';
                });
            }
        });
    }, { threshold: 0.3 });

    const sectionCompetences = document.getElementById('competences');
    if (sectionCompetences) {
        observateur.observe(sectionCompetences);
    }
    
    // Animation des éléments au scroll
    const observateurElements = new IntersectionObserver((entrees) => {
        entrees.forEach(entree => {
            if (entree.isIntersecting) {
                entree.target.classList.add('element-visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.carte-projet, .competence-item, .timeline-item').forEach(el => {
        observateurElements.observe(el);
    });
}

function reinitialiserBarresProgression() {
    const barres = document.querySelectorAll('.barre-progression');
    barres.forEach(barre => {
        barre.style.width = '0%';
    });
}

function animerBarresProgression() {
    const barres = document.querySelectorAll('.barre-progression');
    barres.forEach((barre, index) => {
        setTimeout(() => {
            const pourcentage = barre.getAttribute('data-progression');
            barre.style.width = pourcentage + '%';
        }, index * 200);
    });
}

// Configuration du graphique radar des compétences
function configurerGraphiques() {
    const canvasGraphique = document.getElementById('graphiqueCompetences');
    if (!canvasGraphique) return;
    
    const contexte = canvasGraphique.getContext('2d');
    const centreX = canvasGraphique.width / 2;
    const centreY = canvasGraphique.height / 2;
    const rayon = 140;
    
    const donneesCompetences = {
        axes: ['Réseaux', 'Systèmes', 'Sécurité', 'Développement', 'Télécom'],
        valeurs: [85, 75, 65, 80, 70]
    };
    
    dessinerGraphiqueRadar(contexte, centreX, centreY, rayon, donneesCompetences);
}

function dessinerGraphiqueRadar(ctx, centreX, centreY, rayon, donnees) {
    const nombreAxes = donnees.axes.length;
    const angles = [];
    
    // Calcul des angles pour chaque axe
    for (let i = 0; i < nombreAxes; i++) {
        angles.push((i * 2 * Math.PI) / nombreAxes - Math.PI / 2);
    }
    
    // Effacer le canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Tracé des axes principaux
    ctx.strokeStyle = '#2E3A59';
    ctx.lineWidth = 2;
    
    for (let i = 0; i < nombreAxes; i++) {
        ctx.beginPath();
        ctx.moveTo(centreX, centreY);
        ctx.lineTo(
            centreX + rayon * Math.cos(angles[i]),
            centreY + rayon * Math.sin(angles[i])
        );
        ctx.stroke();
    }
    
    // Cercles concentriques pour les niveaux
    ctx.strokeStyle = '#E8E8E8';
    ctx.lineWidth = 1;
    
    for (let niveau = 1; niveau <= 5; niveau++) {
        ctx.beginPath();
        ctx.arc(centreX, centreY, (rayon / 5) * niveau, 0, 2 * Math.PI);
        ctx.stroke();
    }
    
    // Tracé des données de compétences
    ctx.fillStyle = 'rgba(46, 58, 89, 0.3)';
    ctx.strokeStyle = '#2E3A59';
    ctx.lineWidth = 3;
    
    ctx.beginPath();
    for (let i = 0; i < nombreAxes; i++) {
        const valeurNormalisee = donnees.valeurs[i] / 100;
        const x = centreX + rayon * valeurNormalisee * Math.cos(angles[i]);
        const y = centreY + rayon * valeurNormalisee * Math.sin(angles[i]);
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Points de données
    ctx.fillStyle = '#00C4FF';
    for (let i = 0; i < nombreAxes; i++) {
        const valeurNormalisee = donnees.valeurs[i] / 100;
        const x = centreX + rayon * valeurNormalisee * Math.cos(angles[i]);
        const y = centreY + rayon * valeurNormalisee * Math.sin(angles[i]);
        
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    // Étiquettes des axes
    ctx.fillStyle = '#333';
    ctx.font = '13px Inter, sans-serif';
    ctx.textAlign = 'center';
    
    for (let i = 0; i < nombreAxes; i++) {
        const rayonEtiquette = rayon + 25;
        const x = centreX + rayonEtiquette * Math.cos(angles[i]);
        const y = centreY + rayonEtiquette * Math.sin(angles[i]);
        
        ctx.fillText(donnees.axes[i], x, y + 4);
    }
}

// Configuration des événements pour les modales
function configurerEvenementsModale() {
    // Gestion des clics sur les projets
    document.addEventListener('click', function(e) {
        if (e.target.closest('.carte-projet')) {
            const idProjet = e.target.closest('.carte-projet').getAttribute('data-projet');
            if (idProjet) {
                ouvrirModaleProjet(idProjet);
            }
        }
    });
    
    // Fermeture des modales
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('bouton-fermer')) {
            fermerModale();
        }
    });
    
    // Fermeture avec Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            fermerModale();
        }
    });
}

function ouvrirModaleProjet(idProjet) {
    const donneesProjet = PROJETS_ACADEMIQUES[idProjet];
    if (!donneesProjet) {
        console.error('Projet non trouvé:', idProjet);
        return;
    }
    
    const corpsModale = document.getElementById('corpsModale');
    if (corpsModale) {
        corpsModale.innerHTML = genererContenuModaleProjet(donneesProjet);
       
       // Ajout des écouteurs d'événements pour les éléments de la modale
       const liensCompetences = corpsModale.querySelectorAll('.etiquette-competence');
       liensCompetences.forEach(lien => {
           lien.addEventListener('click', (e) => {
               e.preventDefault();
               const competence = lien.textContent;
               afficherCompetenceDepuisProjet(competence);
           });
       });
       
       // Animation d'entrée du contenu
       setTimeout(() => {
           corpsModale.classList.add('contenu-anime');
       }, 100);
   }
   
   const fenetre = document.getElementById('fenetreModale');
   if (fenetre) {
       fenetre.style.display = 'flex';
       fenetre.classList.add('modal-active');
       document.body.style.overflow = 'hidden';
       
       // Focus pour l'accessibilité
       const boutonFermer = fenetre.querySelector('.fermer-modale');
       if (boutonFermer) {
           boutonFermer.focus();
       }
   }
   
   // Suivi analytics
   suivreInteraction('ouverture_projet', idProjet);
}

function genererContenuModaleProjet(projet) {
   const etiquettesCompetences = projet.competences_validees.map(comp => 
       `<span class="etiquette-competence" data-competence="${comp}">${comp}</span>`
   ).join('');
   
   const htmlPreuves = projet.preuves_travail.map((preuve, index) => {
       let contenuPreuve = `<li class="preuve-item">${preuve}`;
       
       // Gestion spéciale pour les preuves avec images
       if ((preuve.includes("Schéma") || preuve.includes("Capture") || preuve.includes("Rapport")) && projet.photo_projet) {
           contenuPreuve += `
               <div class="image-preuve">
                   <img src="${projet.photo_projet}" 
                        alt="${preuve}" 
                        loading="lazy"
                        onerror="this.style.display='none'"
                        onclick="agrandirImage(this)">
               </div>`;
       }
       
       // Ajout d'icônes selon le type de preuve
       if (preuve.includes("Code") || preuve.includes("GitHub")) {
           contenuPreuve += ` <span class="icone-preuve">💻</span>`;
       } else if (preuve.includes("Rapport") || preuve.includes("Documentation")) {
           contenuPreuve += ` <span class="icone-preuve">📄</span>`;
       } else if (preuve.includes("Schéma") || preuve.includes("Capture")) {
           contenuPreuve += ` <span class="icone-preuve">🖼️</span>`;
       }
       
       contenuPreuve += `</li>`;
       return contenuPreuve;
   }).join('');
   
   const htmlObjectifs = projet.objectifs_techniques.map((obj, index) => 
       `<li class="objectif-item" style="animation-delay: ${index * 0.1}s">${obj}</li>`
   ).join('');

   const htmlTaches = projet.taches_realisees.map((tache, index) => 
       `<li class="tache-item" style="animation-delay: ${index * 0.1}s">${tache}</li>`
   ).join('');
   
   const htmlCode = projet.extrait_config ? 
       `<div class="bloc-code">
           <div class="en-tete-code">
               <span class="titre-code">Extrait de configuration</span>
               <button class="copier-code" onclick="copierCode(this)" title="Copier le code">
                   📋
               </button>
           </div>
           <pre><code>${escapeHtml(projet.extrait_config)}</code></pre>
       </div>` : '';
   
   return `
       <div class="contenu-modale">
           <header class="en-tete-modale">
               <h2 class="titre-projet">${projet.nom}</h2>
               <div class="periode-projet">
                   <span class="icone-periode">📅</span>
                   ${projet.periode}
               </div>
           </header>
           
           <section class="section-modale">
               <h3><span class="icone-section">🎯</span> Contexte et objectifs techniques</h3>
               <p class="contexte-projet">${projet.contexte}</p>
               <ul class="liste-objectifs">
                   ${htmlObjectifs}
               </ul>
           </section>
           
           <section class="section-modale">
               <h3><span class="icone-section">👨‍💻</span> Ma contribution personnelle</h3>
               <p class="participation-projet">${projet.ma_participation}</p>
               <ul class="liste-taches">
                   ${htmlTaches}
               </ul>
           </section>
           
           <section class="section-modale">
               <h3><span class="icone-section">📋</span> Livrables et preuves du travail</h3>
               <div class="section-preuves">
                   <ul class="liste-preuves">
                       ${htmlPreuves}
                   </ul>
                   ${htmlCode}
               </div>
           </section>
           
           <section class="section-modale">
               <h3><span class="icone-section">💡</span> Bilan personnel et apprentissages</h3>
               <div class="bilan-reflexion">
                   ${formaterBilan(projet.bilan_personnel)}
               </div>
           </section>
           
           <footer class="pied-modale">
               <h3><span class="icone-section">✅</span> Compétences validées</h3>
               <div class="competences-projet">
                   ${etiquettesCompetences}
               </div>
               <div class="actions-modale">
                   <button class="bouton-secondaire" onclick="partagerProjet('${projet.nom}')">
                       🔗 Partager
                   </button>
                   <button class="bouton-primaire" onclick="telechargerDetailProjet('${projet.nom}')">
                       📥 Télécharger détails
                   </button>
               </div>
           </footer>
       </div>
   `;
}

function formaterBilan(texte) {
   // Découpage du texte en phrases pour une meilleure lisibilité
   const phrases = texte.split('. ');
   const phrasesFormatees = phrases.map((phrase, index) => {
       if (phrase.includes('difficulté') || phrase.includes('défi')) {
           return `<span class="highlight-difficulte">${phrase}${index < phrases.length - 1 ? '.' : ''}</span>`;
       } else if (phrase.includes('solution') || phrase.includes('résolu')) {
           return `<span class="highlight-solution">${phrase}${index < phrases.length - 1 ? '.' : ''}</span>`;
       } else if (phrase.includes('appris') || phrase.includes('découvert')) {
           return `<span class="highlight-apprentissage">${phrase}${index < phrases.length - 1 ? '.' : ''}</span>`;
       }
       return phrase + (index < phrases.length - 1 ? '.' : '');
   });
   
   return `<p>${phrasesFormatees.join(' ')}</p>`;
}

function escapeHtml(texte) {
   const div = document.createElement('div');
   div.textContent = texte;
   return div.innerHTML;
}

function copierCode(bouton) {
   const blocCode = bouton.closest('.bloc-code');
   const code = blocCode.querySelector('code').textContent;
   
   navigator.clipboard.writeText(code).then(() => {
       bouton.textContent = '✅';
       bouton.title = 'Code copié !';
       setTimeout(() => {
           bouton.textContent = '📋';
           bouton.title = 'Copier le code';
       }, 2000);
   }).catch(() => {
       // Fallback pour les navigateurs plus anciens
       const textarea = document.createElement('textarea');
       textarea.value = code;
       document.body.appendChild(textarea);
       textarea.select();
       document.execCommand('copy');
       document.body.removeChild(textarea);
       
       bouton.textContent = '✅';
       setTimeout(() => {
           bouton.textContent = '📋';
       }, 2000);
   });
}

function agrandirImage(img) {
   const overlay = document.createElement('div');
   overlay.className = 'overlay-image';
   overlay.innerHTML = `
       <div class="conteneur-image-agrandie">
           <img src="${img.src}" alt="${img.alt}">
           <button class="fermer-image" onclick="this.parentElement.parentElement.remove()">×</button>
       </div>
   `;
   
   overlay.addEventListener('click', (e) => {
       if (e.target === overlay) {
           overlay.remove();
       }
   });
   
   document.body.appendChild(overlay);
   document.body.style.overflow = 'hidden';
}

function partagerProjet(nomProjet) {
   if (navigator.share) {
       navigator.share({
           title: `Projet: ${nomProjet}`,
           text: `Découvrez mon projet ${nomProjet} dans mon portfolio`,
           url: window.location.href
       });
   } else {
       // Fallback: copier l'URL dans le presse-papiers
       const url = window.location.href;
       navigator.clipboard.writeText(url).then(() => {
           afficherNotification('Lien copié dans le presse-papiers !', 'succes');
       });
   }
}

function telechargerDetailProjet(nomProjet) {
   // Génération d'un PDF ou document avec les détails
   const projet = Object.values(PROJETS_ACADEMIQUES).find(p => p.nom === nomProjet);
   if (!projet) return;
   
   const contenu = `
# ${projet.nom}
**Période:** ${projet.periode}

## Contexte
${projet.contexte}

## Objectifs techniques
${projet.objectifs_techniques.map(obj => `- ${obj}`).join('\n')}

## Ma participation
${projet.ma_participation}

## Tâches réalisées
${projet.taches_realisees.map(tache => `- ${tache}`).join('\n')}

## Bilan personnel
${projet.bilan_personnel}

## Compétences validées
${projet.competences_validees.join(', ')}
   `;
   
   const blob = new Blob([contenu], { type: 'text/markdown' });
   const url = URL.createObjectURL(blob);
   const lien = document.createElement('a');
   lien.href = url;
   lien.download = `${nomProjet.replace(/[^a-zA-Z0-9]/g, '_')}.md`;
   lien.click();
   URL.revokeObjectURL(url);
}

function fermerModale() {
   const fenetre = document.getElementById('fenetreModale');
   if (fenetre) {
       fenetre.classList.remove('modal-active');
       setTimeout(() => {
           fenetre.style.display = 'none';
       }, 300);
   }
   document.body.style.overflow = '';
   
   // Nettoyage des overlays d'images si présents
   const overlays = document.querySelectorAll('.overlay-image');
   overlays.forEach(overlay => overlay.remove());
}

function fermerModaleSansRecharger() {
   fermerModale();
}

function afficherCompetenceDepuisProjet(idCompetence) {
   fermerModaleSansRecharger();
   afficherSection('competences');
   
   // Scroll vers la compétence spécifique avec délai
   setTimeout(() => {
       const elementCompetence = document.getElementById(`competence-${idCompetence.toLowerCase()}`);
       if (elementCompetence) {
           elementCompetence.scrollIntoView({ 
               behavior: 'smooth', 
               block: 'center' 
           });
           elementCompetence.classList.add('competence-surlignee');
           setTimeout(() => {
               elementCompetence.classList.remove('competence-surlignee');
           }, 3000);
       }
   }, 500);
}

function afficherNotification(message, type = 'info') {
   const notification = document.createElement('div');
   notification.className = `notification notification-${type}`;
   notification.innerHTML = `
       <div class="contenu-notification">
           <span class="icone-notification">
               ${type === 'succes' ? '✅' : type === 'erreur' ? '❌' : 'ℹ️'}
           </span>
           <span class="texte-notification">${message}</span>
       </div>
   `;
   
   document.body.appendChild(notification);
   
   // Animation d'apparition
   setTimeout(() => {
       notification.classList.add('notification-visible');
   }, 100);
   
   // Suppression automatique
   setTimeout(() => {
       notification.classList.remove('notification-visible');
       setTimeout(() => {
           notification.remove();
       }, 300);
   }, 4000);
}

// Gestion des événements de fermeture de modale
document.addEventListener('click', function(e) {
   if (e.target.id === 'fenetreModale' || e.target.classList.contains('fermer-modale')) {
       fermerModale();
   }
});

document.addEventListener('keydown', function(e) {
   if (e.key === 'Escape') {
       const modaleActive = document.querySelector('.modal-active');
       const imageAgrandie = document.querySelector('.overlay-image');
       
       if (imageAgrandie) {
           imageAgrandie.remove();
           document.body.style.overflow = '';
       } else if (modaleActive) {
           fermerModale();
       }
   }
});

// Console de bienvenue et fonctions utilitaires
console.log('%c🎓 Portfolio Technique - Ugo Stanciu', 'color: #00C4FF; font-size: 16px; font-weight: bold;');
console.log('💻 Spécialisation: Réseaux & Télécommunications');
console.log('🔧 Version du script: 2024.1');
console.log('📝 Tapez portfolio.debug() pour les informations de débogage');

// Objet global pour les fonctions utilitaires
window.portfolio = {
   debug: () => {
       console.table(PORTFOLIO_CONFIG);
       console.log('Projets disponibles:', Object.keys(PROJETS_ACADEMIQUES));
       console.log('Section actuelle:', PORTFOLIO_CONFIG.currentPage);
   },
   
   changerSection: (section) => {
       afficherSection(section);
   },
   
   ouvrirProjet: (id) => {
       ouvrirModaleProjet(id);
   },
   
   stats: () => {
       const stats = {
           totalProjets: Object.keys(PROJETS_ACADEMIQUES).length,
           competencesUniques: [...new Set(Object.values(PROJETS_ACADEMIQUES).flatMap(p => p.competences_validees))],
           derniereMAJ: '2024-05-15'
       };
       console.table(stats);
       return stats;
   }
};