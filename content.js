window.SITE_CONTENT = String.raw`
// ─────────────────────────────────────────────────────────
// 홈페이지 내용 파일입니다. 이 파일만 고치면 홈페이지가 바뀝니다.
// · 맨 첫 줄(window.SITE_CONTENT ...)과 맨 마지막 줄은 지우지 마세요.
// · 각 줄은 "항목: 내용" 형식입니다. 콜론(:) 왼쪽의 항목 이름은 바꾸지 마세요.
// · //로 시작하는 줄은 설명이라 홈페이지에 나오지 않습니다.
// · 같은 항목을 두 번 쓰면 첫 번째는 한국어, 두 번째는 영어(ENG 버튼)로 나옵니다.
//   영어 줄을 안 쓰면 영어 화면에도 한국어가 나옵니다.
// · 글 안에 백틱 기호(키보드 숫자 1 왼쪽 키)는 쓰지 마세요. 따옴표는 괜찮습니다.
// ─────────────────────────────────────────────────────────

[기본정보]
이름: 윤정미
영문이름: JeongMee Yoon
소개: 1969년 서울 출생. 서울과 뉴욕을 오가며 작업한다.
소개: Born 1969, Seoul. Lives and works in Seoul and New York.
이메일: studio@example.com
인스타그램:
갤러리:
갤러리:

// 메인 화면에 크게 나오는 대표 이미지 (폴더이름/파일이름)
// 여러 줄을 쓰면 6초마다 번갈아 나옵니다. 한 줄만 쓰면 한 장만 나옵니다.
메인이미지: pinkblue/01.jpg
메인이미지: pinkblue/02.jpg
메인이미지: spacemanspace/01.jpg
메인이미지: animal/01.jpg


// ─────────────────────────────────────────────────────────
// 시리즈. 새 시리즈를 올리려면 [시리즈]부터 아래 묶음을 통째로 복사해 붙이고 내용을 바꾸세요.
// 위에 적은 시리즈가 메뉴에서 먼저 나옵니다.
// 폴더: images 폴더 안에 만든 폴더 이름 (영문, 숫자, - 만 사용)
// 사진: 파일이름 | 작품 제목 | 연도 | 매체 | 크기   (파일이름만 적어도 됩니다)
//   예) 사진: 01.jpg | Terry and His Blue Things | 2008 | 라이트젯 프린트 | 76.2 × 101.6 cm
//   → images/pinkblue/01.jpg 사진이 이 정보와 함께 나옵니다.
// 사진 줄 순서 = 홈페이지에 나오는 순서입니다.
// 사진 파일이 아직 없으면 그 자리에 빈칸이 보입니다.
// ─────────────────────────────────────────────────────────

[시리즈]
제목: 핑크 & 블루 프로젝트
제목: The Pink and Blue Project
연도: 2005~
폴더: pinkblue
노트: 2005년 뉴욕에서 시작된 이 작업은 한국과 미국의 아이들이 소유한 장난감, 옷, 책, 생활용품 가운데 분홍과 파랑에 해당하는 것들을 모두 꺼내어 바닥과 침대 위에 배열하고, 그 가운데 아이를 앉혀 정면에서 기록한다.

색에 대한 선호는 타고나는 것처럼 보이지만, 그 뒤에는 상품과 광고, 어른들의 기대가 겹겹이 놓여 있다. 같은 아이를 몇 년의 간격을 두고 다시 찍은 사진들은 그 선호가 어떻게 생겨나고 바뀌어 가는지를 보여준다.
노트: Begun in New York in 2005, the project gathers every pink or blue toy, garment, book and household object owned by children in Korea and the United States, arranges them across the floor and bed, and photographs the child seated in the middle.

A preference for colour can look innate, yet behind it lie layers of merchandising, advertising and adult expectation. Pictures of the same child made years apart show how that preference forms and shifts over time.
사진: 01.jpg | Terry and His Blue Things
사진: 02.jpg | Lauren and Carolyn and Their Pink & Purple Things
사진: 03.jpg
사진: 04.jpg
사진: 05.jpg
사진: 06.jpg
사진: 07.jpg
사진: 08.jpg


[시리즈]
제목: 공간-사람-공간
제목: Space-Man-Space
연도:
폴더: spacemanspace
노트: 가게라는 공간은 그곳을 지키는 사람의 시간과 취향으로 채워진다. 서울 인사동의 좁은 가게와 노점에서, 빽빽하게 쌓인 물건과 그 사이에 선 상인을 한 화면에 담아, 공간이 사람을 닮아가고 사람이 다시 공간을 닮아가는 관계를 살핀다.
노트: A shop fills up with the time and taste of the person who keeps it. Photographing the shopkeepers of Seoul’s Insadong among the goods that crowd their stalls, the series looks at how a space comes to resemble a person, and the person the space.
사진: 01.jpg
사진: 02.jpg
사진: 03.jpg
사진: 04.jpg
사진: 05.jpg
사진: 06.jpg


[시리즈]
제목: 반려동물
제목: Animal Companions
연도:
폴더: animal
노트: 반려동물은 가족이면서 동시에 사람의 욕망과 생활방식이 투사되는 대상이다. 동물과 사람이 같은 공간에 놓인 모습을 통해 둘 사이의 관계와 집이라는 장소를 함께 읽는다.
노트: A companion animal is family, and also a surface onto which people project their desires and ways of living. Placing animal and owner in the same room, the series reads their relationship together with the home that holds it.
사진: 01.jpg
사진: 02.jpg
사진: 03.jpg
사진: 04.jpg
사진: 05.jpg
사진: 06.jpg


// ─────────────────────────────────────────────────────────
// CV. "# 제목 / 영문 제목" 줄이 구분 제목이고, 그 아래는 "연도 | 내용 | 영문 내용" 입니다.
// 영문 내용은 안 써도 됩니다 (그러면 영어 화면에도 한국어가 나옵니다).
// 연도가 없는 항목(소장처 등)은 "| 내용 | 영문 내용" 처럼 맨 앞을 비워 두세요.
// ─────────────────────────────────────────────────────────

[CV]
# 학력 / Education
2006 | School of Visual Arts 사진·비디오·관련매체 석사, 뉴욕 | MFA, Photography, Video and Related Media, School of Visual Arts, New York

# 개인전 / Solo Exhibitions
// 2024 | 《전시명》, 기관, 도시 | Title, Venue, City

# 단체전 / Group Exhibitions
// 2024 | 《전시명》, 기관, 도시 | Title, Venue, City

# 수상 / Awards
2011 | Sovereign Asian Art Prize 대상, Sovereign Art Foundation | Grand Prize, Sovereign Asian Art Prize, Sovereign Art Foundation

# 소장 / Collections
| 미국 의회도서관 (Prints & Photographs Division) | Library of Congress, Prints & Photographs Division
| 휴스턴 미술관 | Museum of Fine Arts, Houston
| 필라델피아 미술관 | Philadelphia Museum of Art


// ─────────────────────────────────────────────────────────
// 글 (평론, 인터뷰 등). 새 글은 [글]부터 묶음을 복사해 붙이세요.
// 제목·필자·본문 모두 두 번째 줄을 쓰면 영어 화면용이 됩니다.
// 글이 하나도 없으면 [글] 묶음을 모두 지우세요. 메뉴에서 "글"이 사라집니다.
// ─────────────────────────────────────────────────────────

[글]
제목: 평론 제목을 입력하세요
필자: 필자명, 게재처, 연도
본문: 평론 본문을 여기에 넣습니다. 빈 줄을 넣으면 문단이 나뉩니다.


// ─────────────────────────────────────────────────────────
// 출판. 표지 사진은 images/books 폴더에 넣습니다.
// 책: 표지파일이름 | 책 제목 | 출판사, 연도
// 책이 하나도 없으면 [출판] 아래 줄을 모두 지우세요. 메뉴에서 "출판"이 사라집니다.
// ─────────────────────────────────────────────────────────

[출판]
책: 01.jpg | 책 제목 | 출판사, 연도
`;
