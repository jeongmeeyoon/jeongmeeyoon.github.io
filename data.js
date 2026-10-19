/* =====================================================================
   윤정미 홈페이지 — 내용 파일 (data.js)
   ---------------------------------------------------------------------
   사이트의 글과 작품 목록은 모두 이 파일 하나에 있습니다.
   - 따옴표(' ') 안의 글자만 바꾸세요. 쉼표(,)와 괄호는 지우지 마세요.
   - ko: 한국어, en: 영어
   - 작품 이미지는 images/연작폴더/ 안에 정해진 이름으로 넣으면 자동으로 뜹니다.
     예) 핑크 & 블루 1번째 작품 → images/pinkblue/pinkblue-01.jpg
     파일이 없으면 회색(또는 분홍/파랑) 빈칸이 대신 보입니다.
   ===================================================================== */

/* 작품 정보가 비어 있을 때 보이는 기본 문구 */
const PH = { ko: '작품명 입력', en: 'Title to be added' };
const MEDIUM_DEFAULT = { ko: '아카이벌 피그먼트 프린트 · 크기 · 에디션', en: 'Archival pigment print · size · edition' };

/* ---------------------------------------------------------------------
   연작(Series)
   id     : 영문 소문자. 주소(#pinkblue)와 이미지 폴더 이름으로 쓰입니다.
   year   : 제작 연도 (모르면 '' 로 비워두기)
   tone   : 빈칸 색 ('pink', 'blue', '' = 회색)
   works  : 작품 목록. 한 줄이 작품 하나입니다.
            t  = 제목 { ko, en }
            m  = 재료·크기·에디션 { ko, en }   (생략하면 기본 문구)
            ar = 가로/세로 비율 ('4/3' 가로, '4/5' 세로, '1/1' 정사각)
            src= 이미지 경로를 직접 지정하고 싶을 때만 (생략 가능)
   작품을 추가하려면 { ar:'4/3' }, 한 줄을 복사해 붙이고, 이미지 번호를 이어서 넣으세요.
   --------------------------------------------------------------------- */
const SERIES = [
  {
    id: 'pinkblue',
    year: '2005–',
    title: { ko: '핑크 & 블루 프로젝트', en: 'The Pink and Blue Project' },
    lead: {
      ko: '아이들이 가진 분홍색과 파란색 물건을 방 안 가득 펼쳐 놓고, 그 한가운데 아이를 앉혀 촬영한 연작.',
      en: 'Children photographed at the centre of their rooms, surrounded by every pink or blue thing they own.'
    },
    text: {
      ko: [
        '2005년 뉴욕에서 시작된 이 작업은 한국과 미국의 아이들이 소유한 장난감, 옷, 책, 생활용품 가운데 분홍과 파랑에 해당하는 것들을 모두 꺼내어 바닥과 침대 위에 배열하고, 그 가운데 아이를 앉혀 정면에서 기록한다.',
        '색에 대한 선호는 타고나는 것처럼 보이지만, 그 뒤에는 상품과 광고, 어른들의 기대가 겹겹이 놓여 있다. 같은 아이를 몇 년의 간격을 두고 다시 찍은 사진들은 그 선호가 어떻게 생겨나고 바뀌어 가는지를 보여준다.'
      ],
      en: [
        'Begun in New York in 2005, the project gathers every pink or blue toy, garment, book and household object owned by children in Korea and the United States, arranges them across the floor and bed, and photographs the child seated in the middle.',
        'A preference for colour can look innate, yet behind it lie layers of merchandising, advertising and adult expectation. Pictures of the same child made years apart show how that preference forms and shifts over time.'
      ]
    },
    tone: ['pink', 'blue'],
    works: [
      { t: { ko: 'Terry and His Blue Things', en: 'Terry and His Blue Things' }, ar: '4/3' },
      { t: { ko: 'Lauren and Carolyn and Their Pink & Purple Things', en: 'Lauren and Carolyn and Their Pink & Purple Things' }, ar: '4/3' },
      { ar: '4/3' },
      { ar: '4/3' },
      { ar: '4/3' },
      { ar: '4/3' },
      { ar: '4/3' },
      { ar: '4/3' }
    ]
  },
  {
    id: 'spacemanspace',
    year: '',
    title: { ko: '공간-사람-공간', en: 'Space-Man-Space' },
    lead: {
      ko: '서울 인사동의 좁은 가게와 노점에서, 자신이 파는 물건들 사이에 선 상인을 기록한 연작.',
      en: 'Shopkeepers of Seoul’s Insadong, photographed among the goods that crowd their stalls and kiosks.'
    },
    text: {
      ko: ['가게라는 공간은 그곳을 지키는 사람의 시간과 취향으로 채워진다. 빽빽하게 쌓인 물건과 그 사이에 선 사람을 한 화면에 담아, 공간이 사람을 닮아가고 사람이 다시 공간을 닮아가는 관계를 살핀다.'],
      en: ['A shop fills up with the time and taste of the person who keeps it. Framing the packed merchandise and its keeper in a single picture, the series looks at how a space comes to resemble a person, and the person the space.']
    },
    tone: [''],
    works: [{ ar: '4/5' }, { ar: '4/5' }, { ar: '4/5' }, { ar: '4/5' }, { ar: '4/5' }, { ar: '4/5' }]
  },
  {
    id: 'animal',
    year: '',
    title: { ko: '반려동물', en: 'Animal Companions' },
    lead: {
      ko: '함께 사는 동물과 사람, 그리고 그들이 함께 머무는 집을 한 장면에 담은 연작.',
      en: 'People, the animals they live with, and the homes they share.'
    },
    text: {
      ko: ['반려동물은 가족이면서 동시에 사람의 욕망과 생활방식이 투사되는 대상이다. 동물과 사람이 같은 공간에 놓인 모습을 통해 둘 사이의 관계와 집이라는 장소를 함께 읽는다.'],
      en: ['A companion animal is family, and also a surface onto which people project their desires and ways of living. Placing animal and owner in the same room, the series reads their relationship together with the home that holds it.']
    },
    tone: [''],
    works: [{ ar: '5/4' }, { ar: '5/4' }, { ar: '5/4' }, { ar: '5/4' }, { ar: '5/4' }, { ar: '5/4' }]
  }
];

/* 첫 화면에 번갈아 보일 작품: [연작 id, 작품 번호(1부터)] */
const HOME_PICKS = [
  ['pinkblue', 1], ['pinkblue', 2], ['spacemanspace', 1], ['animal', 1], ['pinkblue', 3]
];
const HOME_INTERVAL = 6000; /* 첫 화면 사진이 바뀌는 간격 (1000 = 1초) */

/* ---------------------------------------------------------------------
   약력 (CV) — [연도, 내용] 형식. '[' 로 시작하는 줄은 흐리게 표시됩니다(작성 예정).
   --------------------------------------------------------------------- */
const CV = {
  ko: [
    ['학력', [
      ['2006', 'School of Visual Arts 사진·비디오·관련매체 MFA, 뉴욕'],
      ['', '[학사 학력 작성 예정]']
    ]],
    ['개인전', [
      ['', '[전시명], [기관], [도시] — 작성 예정'],
      ['', '[전시명], [기관], [도시] — 작성 예정']
    ]],
    ['단체전', [
      ['', '[전시명], [기관], [도시] — 작성 예정'],
      ['', '[전시명], [기관], [도시] — 작성 예정']
    ]],
    ['수상', [
      ['2011', 'Sovereign Asian Art Prize 대상 (Sovereign Art Foundation)']
    ]],
    ['소장', [
      ['', '미국 의회도서관 (Prints & Photographs Division)'],
      ['', '휴스턴 미술관 (Museum of Fine Arts, Houston)'],
      ['', '필라델피아 미술관 (Philadelphia Museum of Art)']
    ]]
  ],
  en: [
    ['Education', [
      ['2006', 'MFA, Photography, Video and Related Media, School of Visual Arts, New York'],
      ['', '[Undergraduate degree to be added]']
    ]],
    ['Solo Exhibitions', [
      ['', '[Title], [Venue], [City] — to be added'],
      ['', '[Title], [Venue], [City] — to be added']
    ]],
    ['Group Exhibitions', [
      ['', '[Title], [Venue], [City] — to be added'],
      ['', '[Title], [Venue], [City] — to be added']
    ]],
    ['Awards', [
      ['2011', 'Grand Prize, Sovereign Asian Art Prize, Sovereign Art Foundation']
    ]],
    ['Collections', [
      ['', 'Library of Congress, Prints & Photographs Division, Washington D.C.'],
      ['', 'Museum of Fine Arts, Houston'],
      ['', 'Philadelphia Museum of Art']
    ]]
  ]
};

/* ---------------------------------------------------------------------
   메뉴 이름, 글(Texts), 출판(Books), 연락처(Contact)
   출판 표지 이미지: images/books/book-01.jpg, book-02.jpg ...
   --------------------------------------------------------------------- */
const T = {
  ko: {
    name: '윤정미', nameAlt: 'JeongMee Yoon',
    works: '작업', cv: '약력', texts: '글', books: '출판', contact: '연락처',
    back: '← 작업 목록', close: '닫기',
    born: '1969년 서울 출생. 서울과 뉴욕을 오가며 작업한다.',
    textList: [
      { h: '작가 노트 — 핑크 & 블루 프로젝트', by: '윤정미', p: SERIES[0].text.ko },
      { h: '[평론 제목]', by: '[필자명], [게재처], [연도]', p: ['[평론 본문을 여기에 넣습니다.]'] }
    ],
    bookList: [
      ['[도서명]', '[출판사], [연도]'],
      ['[도서명]', '[출판사], [연도]'],
      ['[도서명]', '[출판사], [연도]']
    ],
    contactList: [
      ['이메일', 'studio@example.com', 'copy'],
      ['갤러리', '[대표 갤러리명 · 연락처]'],
      ['인스타그램', '@[계정]']
    ],
    copy: '복사', copied: '복사됨',
    rights: '모든 이미지의 저작권은 작가에게 있으며, 허락 없이 복제·사용할 수 없습니다.'
  },
  en: {
    name: 'JEONGMEE YOON', nameAlt: '윤정미',
    works: 'Works', cv: 'CV', texts: 'Texts', books: 'Books', contact: 'Contact',
    back: '← Back to works', close: 'Close',
    born: 'Born 1969, Seoul. Lives and works in Seoul and New York.',
    textList: [
      { h: 'Artist Statement — The Pink and Blue Project', by: 'JeongMee Yoon', p: SERIES[0].text.en },
      { h: '[Essay title]', by: '[Author], [Publication], [Year]', p: ['[Essay text goes here.]'] }
    ],
    bookList: [
      ['[Book title]', '[Publisher], [Year]'],
      ['[Book title]', '[Publisher], [Year]'],
      ['[Book title]', '[Publisher], [Year]']
    ],
    contactList: [
      ['Email', 'studio@example.com', 'copy'],
      ['Gallery', '[Representing gallery · contact]'],
      ['Instagram', '@[handle]']
    ],
    copy: 'Copy', copied: 'Copied',
    rights: 'All images © the artist. No reproduction without permission.'
  }
};
