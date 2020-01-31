var optnames={};
optnames[11]='Категория';
optnames[12]='Бренд';
optnames[1308]='Вес, грамм';
optnames[1264]='Длина, мм';
optnames[1309]='Высота, мм';
optnames[1310]='Ширина, мм';
optnames[16]='Напряжение';
optnames[25]='Ток пуска';
optnames[24]='Допустимая нагрузка';
optnames[74]='Положений переключателя';
optnames[3]='Материал';
optnames[27]='Цвет';
optnames[1311]='Габариты, мм';
optnames[69]='Источник света';
optnames[72]='Цвет огня';
optnames[71]='Угол, градусы';
optnames[70]='Мощность потребления, Вт';
optnames[19]='Серия';
optnames[73]='Высота стойки, дюймы';
optnames[1]='Диаметр винта, дюйм';
optnames[4]='Шаг';
optnames[2]='Количество лопастей';
optnames[6]='Посадка на вал';
optnames[5]='Мощность мотора, лс';
optnames[8]='Тип лодочного мотора';
optnames[7]='Производитель техники';
optnames[20]='Тип помпы';
optnames[17]='Производительность, GPM';
optnames[18]='Производительность, Л/МИН';
optnames[14]='Давление, PSI';
optnames[13]='Давление, BAR';
optnames[21]='Диаметр патрубка, мм';
optnames[22]='Максимальный напор, м';
optnames[23]='Производительность, GPH';
optnames[1288]='Размер';
optnames[26]='Форма';
optnames[28]='Цвет оригинальный';
optnames[29]='Диаметр посадки, мм';
optnames[30]='Объем';
optnames[33]='Модель техники';
optnames[32]='Год модели техники';
optnames[31]='OEM';
optnames[34]='Тип поршня/поршневых колец';
optnames[35]='Ремонтный размер';
optnames[36]='Длина троса, футы';
optnames[51]='Модель гидронасоса';
optnames[53]='Объем гидронасоса';
optnames[52]='Модель гидроцилиндра';
optnames[54]='Объем гидроцилиндра';
optnames[1289]='Модель и год техники';
optnames[1291]='Гусеница';
optnames[1292]='Модель техники Arctic Cat';
optnames[1290]='Модель техники Yamaha';
optnames[15]='Модель';
optnames[68]='Покрытие';
optnames[66]='Совместимость';
optnames[1265]='Переключатели';
optnames[1266]='Разъем прикуривателя';
optnames[1267]='Контакты';
optnames[1268]='Клеммы +/-, мм';
optnames[1269]='Схема работы';
optnames[1271]='Ток USB';
optnames[1270]='Разъем USB';
optnames[1272]='Индикация питания';
optnames[1301]='Тип прибора';
optnames[1302]='Элемент питания';
optnames[1300]='Подсветка дисплея';
optnames[1299]='Длина кабеля питания, мм';
optnames[1298]='Влагозащита';
optnames[1303]='Высота стойки, мм';
optnames[40]='Расцветка';
var img='http://b2b.topsports.ru/c/productpage/##.jpg';
var imgfull='http://b2b.topsports.ru/c/source/##.jpg';
var colors={};
colors={"Белый":1,"Черный":1,"Металик":1,"Красный":1,"Синий":1,"Графитовый":1,"Желтый":1,"Серый":1,"Оранжевый":1};
var brand={};
brands={"Skipper":1,"KingDolphin":1,"SeaFlo":1,"SAM-Tech":1,"Tecnoseal":1,"Skinz":1,"SPI":1,"TMC":1,"Hord":1};
var cats={};
cats={"0":"Аксессуары для снегохода","1":"Аксессуары для снегоходов","2":"Винты гребные","3":"Выхлопная система","4":"Гаражное оборудование","5":"Двигатель","6":"Защита анодная","7":"Инструменты","8":"Корпус","9":"Крепление","10":"Мебель судовая","11":"Насосы для надувных лодок","12":"Подвеска","13":"Подвеска передняя","14":"Помпы и баки аккумулирующие","15":"Рулевая система и управление","16":"Сервисное оборудование","17":"Система охлаждения","18":"Система пресной воды","19":"Снаряжение","20":"Сувениры","21":"Топливная система","22":"Тормозная система","23":"Трансмиссия","24":"Тросы газа","25":"Управление","26":"Электрика"};
var subcats={};
subcats={"0":"Переключатели батарей","1":"Выключатели массы","2":"Огни навигационные","3":"","4":"Водоподающие","5":"Водооткачивающие","6":"Аэраторные","7":"Мацераторные","8":"Топливные","9":"Люки","10":"Иллюминаторы","11":"Патрубки","12":"Заливные горловины","13":"Канистры","14":"Прокладки, сальники и уплотнения","15":"Поршни и кольца","16":"Коленвал","17":"Подшипники шатуна","18":"Шатуны","19":"Подшипники коленвала","20":"Зажигание","21":"Тросы румпеля","22":"Валы ведущие","23":"Помпы охлаждения","24":"Подшипники","25":"Шестерни","26":"Валы гребные","27":"Корпус редуктора","28":"Обоймы гребного вала","29":"Насосы топливные","30":"Корпусы подшипников","31":"Крыльчатки","32":"Гофры","33":"Заслонки","34":"Колеса рулевые","35":"ДУ","36":"Тросы управления","37":"Рулевые управления","38":"Защиты днища","39":"Бамперы","40":"Брелоки","41":"Усиления рычагов","42":"Кронштейны и крепления","43":"Глушители","44":"Защиты приводного ремня","45":"Сумки на тоннель","46":"Комплекты удаления фар","47":"Рукоятки тормоза","48":"Рулевые колонки","49":"Сумки на стекло","50":"Демферы лыж","51":"Накладки на руль","52":"Сумки на руль","53":"Подножки и зацепы","54":"Крепления пластика","55":"Скребки наста","56":"Адапторы карбюратора и впускного коллектора","57":"Цилиндры тормозные и ремкомплекты","58":"Курки газа","59":"Кнопки и переключатели","60":"Пружины выхлопной системы","61":"КПП","62":"Брызговики","63":"Шатунные сборки","64":"Щеки коленвала","65":"Опоры двигателя","66":"Стартеры ручные","67":"Датчики","68":"Замки зажигания","69":"Реле","70":"Статоры","71":"Вариатор","72":"Переходники топливные","73":"Панели бортового питания","74":"Клеммы аккумуляторные","75":"Кнопки","76":"Переключатели и тумблеры","77":"Фильтры топливные","78":"Блок цилиндров","79":"Ручной стартер","80":"Пружины","81":"Насосы электрические","82":"Насосы ножные","83":"Приборы контроля","84":"Сидения","85":"Стойки и платформы","86":"Насосы для ГСМ","87":"Шланги топливные","88":"Шланги дренажные","89":"Приспособоления для промывки","90":"Поршневые комплекты","91":"Ремни стяжные","92":"Линзы, стоп-сигналы и фары","93":"Кнопки аварийной остановки","94":"Тросы обогатителя и ремкомплекты","95":"Колодки тормозные","96":"Наконечники рулевые","97":"Рычаги","98":"Мембраны мощностного клапана","99":"Втулки и крепежи рулевой системы","100":"Электростартеры","101":"Фильтры масляные","102":"Крышки","103":"Подкаты","104":"Катушки зажигания","105":"Бендиксы электростартеров","106":"Заглушки роликов","107":"Заглушки пластика","108":"Детали амортизаторов","109":"Клапана впускные и ремкомплекты","110":"Фильтры впуска","111":"Карбюраторы и ремкомплекты","112":"Втулки рычагов","113":"Рычаги поворотные","114":"Опоры шаровые","115":"Шестерни отбора мощности","116":"Лопатки мощностного клапана","117":"Фаркопы и сцепные устройства","118":"Подогревы","119":"Инструмент","120":"Амортизаторы"};
var catsubs={};
catsubs={"Электрика":{"0":"Переключатели батарей","1":"Выключатели массы","2":"Огни навигационные","3":"Зажигание","4":"Кронштейны и крепления","5":"Кнопки и переключатели","6":"Датчики","7":"Замки зажигания","8":"Реле","9":"Статоры","10":"Панели бортового питания","11":"Клеммы аккумуляторные","12":"Кнопки","13":"Переключатели и тумблеры","14":"Приборы контроля","15":"Линзы, стоп-сигналы и фары","16":"Кнопки аварийной остановки","17":"Электростартеры","18":"Катушки зажигания","19":"Бендиксы электростартеров","20":"Подогревы"},"Винты гребные":{"0":""},"Помпы и баки аккумулирующие":{"0":"Водоподающие","1":"Водооткачивающие","2":"Аэраторные","3":"Мацераторные","4":"Топливные","5":"Патрубки","6":"Шланги дренажные"},"Корпус":{"0":"Люки","1":"Иллюминаторы","2":"Защиты днища","3":"Бамперы","4":"Защиты приводного ремня","5":"Сумки на тоннель","6":"Комплекты удаления фар","7":"Сумки на стекло","8":"Сумки на руль","9":"Подножки и зацепы","10":"Крепления пластика","11":"Брызговики","12":"Заглушки пластика"},"Система пресной воды":{"0":"Заливные горловины"},"Топливная система":{"0":"Заливные горловины","1":"Канистры","2":"Насосы топливные","3":"Адапторы карбюратора и впускного коллектора","4":"Переходники топливные","5":"Фильтры топливные","6":"Шланги топливные","7":"Фильтры масляные","8":"Крышки","9":"Клапана впускные и ремкомплекты","10":"Фильтры впуска","11":"Карбюраторы и ремкомплекты"},"Двигатель":{"0":"Прокладки, сальники и уплотнения","1":"Поршни и кольца","2":"Коленвал","3":"Подшипники шатуна","4":"Шатуны","5":"Подшипники коленвала","6":"Гофры","7":"Заслонки","8":"Шатунные сборки","9":"Щеки коленвала","10":"Опоры двигателя","11":"Стартеры ручные","12":"Блок цилиндров","13":"Ручной стартер","14":"Поршневые комплекты"},"Трансмиссия":{"0":"Прокладки, сальники и уплотнения","1":"Валы ведущие","2":"Подшипники","3":"Шестерни","4":"Валы гребные","5":"Корпус редуктора","6":"Обоймы гребного вала","7":"Корпусы подшипников","8":"Гофры","9":"КПП","10":"Вариатор","11":"Пружины"},"Управление":{"0":"Тросы румпеля","1":"Колеса рулевые","2":"ДУ","3":"Тросы управления","4":"Рулевые управления"},"Система охлаждения":{"0":"Помпы охлаждения","1":"Прокладки, сальники и уплотнения","2":"Крыльчатки","3":"Шестерни отбора мощности"},"Защита анодная":{"0":""},"Сувениры":{"0":"Брелоки"},"Подвеска передняя":{"0":"Усиления рычагов"},"Выхлопная система":{"0":"Глушители","1":"Прокладки, сальники и уплотнения","2":"Пружины выхлопной системы","3":"Мембраны мощностного клапана","4":"Лопатки мощностного клапана"},"Тормозная система":{"0":"Рукоятки тормоза","1":"Цилиндры тормозные и ремкомплекты","2":"Колодки тормозные"},"Рулевая система и управление":{"0":"Рулевые колонки","1":"Демферы лыж","2":"Накладки на руль","3":"Курки газа","4":"Наконечники рулевые","5":"Втулки и крепежи рулевой системы","6":"Рычаги поворотные","7":"Опоры шаровые"},"Аксессуары для снегоходов":{"0":"Скребки наста","1":"Фаркопы и сцепные устройства"},"Тросы газа":{"0":"","1":"Тросы обогатителя и ремкомплекты"},"Насосы для надувных лодок":{"0":"Насосы электрические","1":"Насосы ножные"},"Мебель судовая":{"0":"Сидения","1":"Стойки и платформы"},"Инструменты":{"0":"Насосы для ГСМ","1":"Приспособоления для промывки"},"Гаражное оборудование":{"0":"Ремни стяжные","1":"Подкаты"},"Подвеска":{"0":"Рычаги","1":"Заглушки роликов","2":"Детали амортизаторов","3":"Втулки рычагов","4":"Амортизаторы"},"Сервисное оборудование":{"0":"Инструмент"}};