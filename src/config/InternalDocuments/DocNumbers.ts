export interface DocumentInfo {
    partnerart: string;
    details: { label: string; value: string; type: 'text' | 'password' | 'url'; copyable?: boolean }[];
}

const documents: DocumentInfo[] = [
    {
        partnerart: 'GLN Dr. Hans Muster',
        details: [
            { label: 'Nummer', value: '7601001234567', type: 'text', copyable: true },
        ],
    },
    {
        partnerart: 'GLN Hausarztpraxis Zürich AG',
        details: [
            { label: 'Nummer', value: '7601007654321', type: 'text', copyable: true },
        ],
    },
    {
        partnerart: 'GLN Labor Meditest',
        details: [
            { label: 'Nummer', value: '7601009876543', type: 'text', copyable: true },
        ],
    },
    {
        partnerart: 'ZSR Nummer Praxis',
        details: [
            { label: 'Nummer', value: 'B123456', type: 'text', copyable: true },
        ],
    },
    {
        partnerart: 'UBS Kontoverbindung',
        details: [
            { label: 'Inhaber', value: 'Hausarztpraxis Zürich AG', type: 'text', copyable: true },
            { label: 'IBAN', value: 'CH93 0076 2011 6238 5295 7', type: 'text', copyable: true },
            { label: 'BIC', value: 'UBSWCHZH80A', type: 'text', copyable: true },
            { label: 'QR IBAN', value: 'CH443000523820163295Z', type: 'text', copyable: true },
            { label: 'Bank', value: 'UBS AG, Postfach, 8098 Zürich', type: 'text', copyable: true }
        ],
    },
    {
        partnerart: 'Kontakt Vermieter',
        details: [
            { label: 'Vermieter', value: 'Meier Thomas und Karin', type: 'text', copyable: true },
            { label: 'Adresse', value: 'Bahnhofstrasse 10\n8001 Zürich', type: 'text', copyable: true },
            { label: 'Tel', value: '044 123 45 67', type: 'text', copyable: true },
            { label: 'Natel', value: '079 987 65 43', type: 'text', copyable: true },
            { label: 'E-Mail', value: 'vermieter@beispiel.ch', type: 'text', copyable: true },
        ],
    },
    {
        partnerart: 'SVA Zürich',
        details: [
            { label: 'Nummer', value: 'Z87.654', type: 'text', copyable: true },
        ],
    },
    {
        partnerart: 'SwissLife',
        details: [
            { label: 'Nummer', value: 'SL12345', type: 'text', copyable: true },
        ],
    },
    {
        partnerart: 'Galexis',
        details: [
            { label: 'Kundennummer', value: '543210', type: 'text', copyable: true },
            { label: 'Url', value: 'https://www.e-galexis.com/de/login.php', type: 'url', copyable: true },
        ],
    },
    {
        partnerart: 'Polymed',
        details: [
            { label: 'Kundennummer', value: '654321', type: 'text', copyable: true },
            { label: 'Url', value: 'https://polyeasy.polymed.ch/', type: 'url', copyable: true },
        ],
    },
    {
        partnerart: 'Gesundheitsprodukte AG',
        details: [
            { label: 'Benutzername', value: 'praxiszuerich@hin.ch', type: 'text', copyable: true },
            { label: 'Passwort', value: 'Noch nicht verfügbar', type: 'password' },
            { label: 'URL', value: 'https://www.gesundheitsprodukte.ch', type: 'url', copyable: true }
        ],
    },
    {
        partnerart: 'Compendium',
        details: [
            { label: 'Benutzername', value: 'praxiszuerich@hin.ch', type: 'text', copyable: true },
            { label: 'URL', value: 'https://compendium.ch/', type: 'url', copyable: true }
        ],
    },
];

export default documents;
