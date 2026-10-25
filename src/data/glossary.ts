// Glosario de términos hebreos y judíos que aparecen en el sitio, en español e inglés.
// Definiciones descriptivas y neutrales; las enseñanzas concretas llevan su fuente donde se citan.

export interface GlossaryEntry {
  hebrew: string
  es: { term: string; text: string }
  en: { term: string; text: string }
}

export const GLOSSARY: GlossaryEntry[] = [
  {
    hebrew: 'קבלה',
    es: { term: 'Kabbalah (Cábala)', text: 'Literalmente «recepción». Es la tradición mística judía, que estudia cómo se manifiesta lo divino en el mundo y en el alma.' },
    en: { term: 'Kabbalah', text: 'Literally “receiving.” The Jewish mystical tradition, which studies how the divine is manifested in the world and in the soul.' },
  },
  {
    hebrew: 'ספירות',
    es: { term: 'Sefirá (plural: sefirot)', text: 'Cada uno de los diez atributos o emanaciones a través de los cuales, según la Kabbalah, se revela lo divino. Se representan en el Árbol de la Vida.' },
    en: { term: 'Sefirah (plural: sefirot)', text: 'Each of the ten attributes or emanations through which, according to Kabbalah, the divine is revealed. They are depicted in the Tree of Life.' },
  },
  {
    hebrew: 'עץ חיים',
    es: { term: 'Etz Jaím (Árbol de la Vida)', text: 'Diagrama que ordena las diez sefirot y los senderos que las unen.' },
    en: { term: 'Etz Chaim (Tree of Life)', text: 'A diagram that arranges the ten sefirot and the paths that connect them.' },
  },
  {
    hebrew: 'גימטריא',
    es: { term: 'Guematría', text: 'Sistema que da a cada letra hebrea un valor numérico (Álef = 1, Bet = 2…) y permite relacionar palabras por la suma de sus letras.' },
    en: { term: 'Gematria', text: 'A system that gives each Hebrew letter a numerical value (Aleph = 1, Bet = 2…) and relates words through the sum of their letters.' },
  },
  {
    hebrew: 'אלף־בית',
    es: { term: 'Alefato (alef-bet)', text: 'El alfabeto hebreo, de 22 letras, que se escribe de derecha a izquierda.' },
    en: { term: 'Aleph-bet', text: 'The Hebrew alphabet, with 22 letters, written from right to left.' },
  },
  {
    hebrew: 'תורה',
    es: { term: 'Torá', text: 'Los cinco libros de Moisés (Génesis a Deuteronomio). En sentido amplio, toda la enseñanza judía.' },
    en: { term: 'Torah', text: 'The Five Books of Moses (Genesis to Deuteronomy). In a broader sense, all of Jewish teaching.' },
  },
  {
    hebrew: 'תנ״ך',
    es: { term: 'Tanaj', text: 'La Biblia hebrea: Torá (Ley), Neviím (Profetas) y Ketuvim (Escritos).' },
    en: { term: 'Tanakh', text: 'The Hebrew Bible: Torah (Law), Nevi’im (Prophets) and Ketuvim (Writings).' },
  },
  {
    hebrew: 'משנה',
    es: { term: 'Mishná', text: 'Primera compilación escrita de la ley oral judía, hacia el año 200. Avot (la «Ética de los Padres») es uno de sus tratados.' },
    en: { term: 'Mishnah', text: 'The first written compilation of the Jewish oral law, around the year 200. Avot (“Ethics of the Fathers”) is one of its tractates.' },
  },
  {
    hebrew: 'תלמוד',
    es: { term: 'Talmud', text: 'La Mishná junto con su extenso comentario (Guemará). Las citas como «Shabat 156a» indican tratado y página.' },
    en: { term: 'Talmud', text: 'The Mishnah together with its extensive commentary (Gemara). References such as “Shabbat 156a” give the tractate and page.' },
  },
  {
    hebrew: 'מדרש',
    es: { term: 'Midrash', text: 'Interpretaciones y relatos de los sabios sobre el texto bíblico, como Bereshit Rabá o Bamidbar Rabá.' },
    en: { term: 'Midrash', text: 'The sages’ interpretations and narratives on the biblical text, such as Bereshit Rabbah or Bamidbar Rabbah.' },
  },
  {
    hebrew: 'ספר יצירה',
    es: { term: 'Séfer Yetsirá', text: '«Libro de la Formación». Uno de los textos más antiguos de la Kabbalah; relaciona las letras hebreas con la creación, los meses y las facultades humanas.' },
    en: { term: 'Sefer Yetzirah', text: '“Book of Formation.” One of the oldest Kabbalistic texts; it relates the Hebrew letters to creation, the months and human faculties.' },
  },
  {
    hebrew: 'זוהר',
    es: { term: 'Zóhar', text: 'Obra central de la Kabbalah. La tradición la atribuye a Rabí Shimón bar Yojai; los historiadores la sitúan en el siglo XIII.' },
    en: { term: 'Zohar', text: 'The central work of Kabbalah. Tradition attributes it to Rabbi Shimon bar Yochai; historians date it to the 13th century.' },
  },
  {
    hebrew: 'האר״י',
    es: { term: 'Arizal (el Arí)', text: 'Rabí Itzjak Luria (1534–1572), gran cabalista de Safed. Sus enseñanzas las escribió su discípulo Rabí Jaim Vital.' },
    en: { term: 'Arizal (the Ari)', text: 'Rabbi Isaac Luria (1534–1572), the great Kabbalist of Safed. His teachings were written down by his disciple Rabbi Chaim Vital.' },
  },
  {
    hebrew: 'תיקון',
    es: { term: 'Tikún', text: '«Reparación» o «rectificación». En la Kabbalah, lo que cada alma viene a completar o corregir en este mundo.' },
    en: { term: 'Tikkun', text: '“Repair” or “rectification.” In Kabbalah, what each soul comes to complete or correct in this world.' },
  },
  {
    hebrew: 'מזל',
    es: { term: 'Mazal', text: 'Constelación o influencia astral. El Talmud debate su alcance: Rabí Yojanán enseña que «no hay mazal para Israel».' },
    en: { term: 'Mazal', text: 'A constellation or astral influence. The Talmud debates its reach: Rabbi Yochanan teaches that “Israel has no mazal.”' },
  },
  {
    hebrew: 'מצוה',
    es: { term: 'Mitsvá', text: 'Precepto o mandamiento. La tradición cuenta 613 en la Torá.' },
    en: { term: 'Mitzvah', text: 'A commandment or precept. Tradition counts 613 in the Torah.' },
  },
  {
    hebrew: 'צדקה',
    es: { term: 'Tsedaká', text: 'La caridad, entendida como acto de justicia.' },
    en: { term: 'Tzedakah', text: 'Charity, understood as an act of justice.' },
  },
  {
    hebrew: 'תשובה',
    es: { term: 'Teshuvá', text: '«Retorno»: el arrepentimiento y el camino de vuelta al bien.' },
    en: { term: 'Teshuvah', text: '“Return”: repentance and the way back to the good.' },
  },
  {
    hebrew: 'שבת',
    es: { term: 'Shabat', text: 'El séptimo día, de descanso y santidad, desde el atardecer del viernes hasta la noche del sábado.' },
    en: { term: 'Shabbat', text: 'The seventh day of rest and holiness, from Friday sunset to Saturday nightfall.' },
  },
  {
    hebrew: 'פסח',
    es: { term: 'Pésaj', text: 'Pascua judía (Nisán). Recuerda la salida de Egipto.' },
    en: { term: 'Pesach (Passover)', text: 'The festival in Nisan that commemorates the Exodus from Egypt.' },
  },
  {
    hebrew: 'שבועות',
    es: { term: 'Shavuot', text: 'Fiesta de las Semanas (Siván). Celebra la entrega de la Torá en el Sinaí.' },
    en: { term: 'Shavuot', text: 'The Feast of Weeks (Sivan). It celebrates the giving of the Torah at Sinai.' },
  },
  {
    hebrew: 'סוכות',
    es: { term: 'Sucot', text: 'Fiesta de las Cabañas (Tishréi), de siete días, con las cuatro especies.' },
    en: { term: 'Sukkot', text: 'The Feast of Tabernacles (Tishrei), seven days long, with the four species.' },
  },
  {
    hebrew: 'ראש השנה',
    es: { term: 'Rosh Hashaná', text: 'Año nuevo judío (1 de Tishréi).' },
    en: { term: 'Rosh Hashanah', text: 'The Jewish New Year (1 Tishrei).' },
  },
  {
    hebrew: 'יום כפור',
    es: { term: 'Yom Kipur', text: 'Día del Perdón (10 de Tishréi), de ayuno y retorno.' },
    en: { term: 'Yom Kippur', text: 'The Day of Atonement (10 Tishrei), a day of fasting and return.' },
  },
  {
    hebrew: 'חנוכה',
    es: { term: 'Janucá', text: 'Fiesta de las Luces (desde el 25 de Kislev), ocho días encendiendo velas.' },
    en: { term: 'Chanukah', text: 'The Festival of Lights (from 25 Kislev), eight days of kindling lights.' },
  },
  {
    hebrew: 'פורים',
    es: { term: 'Purim', text: 'Fiesta de Adar que celebra la salvación narrada en el libro de Ester.' },
    en: { term: 'Purim', text: 'The festival in Adar that celebrates the salvation told in the Book of Esther.' },
  },
  {
    hebrew: 'עומר',
    es: { term: 'Ómer', text: 'Cuenta de 49 días entre Pésaj y Shavuot. Lag BaÓmer es el día 33.' },
    en: { term: 'Omer', text: 'The 49-day count between Pesach and Shavuot. Lag BaOmer is day 33.' },
  },
  {
    hebrew: 'חושן',
    es: { term: 'Jóshen (pectoral)', text: 'Pieza del Sumo Sacerdote con doce piedras, una por cada tribu de Israel.' },
    en: { term: 'Choshen (breastplate)', text: 'The High Priest’s breastplate with twelve stones, one for each tribe of Israel.' },
  },
  {
    hebrew: 'שמע',
    es: { term: 'Shemá', text: '«Escucha, Israel»: la declaración central de la fe judía (Deuteronomio 6:4).' },
    en: { term: 'Shema', text: '“Hear, O Israel”: the central declaration of Jewish faith (Deuteronomy 6:4).' },
  },
  {
    hebrew: 'תהלים',
    es: { term: 'Tehilim (Salmos)', text: 'El libro de los 150 Salmos, atribuido en su mayoría al rey David.' },
    en: { term: 'Tehillim (Psalms)', text: 'The Book of the 150 Psalms, most of them attributed to King David.' },
  },
  {
    hebrew: 'מוהל',
    es: { term: 'Mohel', text: 'La persona que realiza la circuncisión ritual (Brit Milá) al octavo día.' },
    en: { term: 'Mohel', text: 'The person who performs the ritual circumcision (Brit Milah) on the eighth day.' },
  },
  {
    hebrew: 'רמב״ם',
    es: { term: 'Rambam (Maimónides)', text: 'Rabí Moshé ben Maimón (1138–1204), filósofo y codificador de la ley judía (Mishné Torá).' },
    en: { term: 'Rambam (Maimonides)', text: 'Rabbi Moses ben Maimon (1138–1204), philosopher and codifier of Jewish law (Mishneh Torah).' },
  },
  {
    hebrew: 'רש״י',
    es: { term: 'Rashi', text: 'Rabí Shlomó Itzjakí (1040–1105), el gran comentarista de la Biblia y el Talmud.' },
    en: { term: 'Rashi', text: 'Rabbi Shlomo Yitzchaki (1040–1105), the great commentator on the Bible and the Talmud.' },
  },
]
