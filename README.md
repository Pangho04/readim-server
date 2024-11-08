## <img src="https://github.com/user-attachments/assets/47a8cf73-e1b3-485a-8037-da1170d10176" width="24" /> Readim
<p align="center">
  <img src="https://github.com/user-attachments/assets/5fed3ed5-8464-48e1-98d2-57c1c6efadc7" width="500" />
</p>
<div align="center">
<b>Readim</b>은 사용자가 읽고 싶은 <b>아티클의 리딩 타임을 사용자별로 최적화</b>하여 알려드리는 웹 사이트입니다.

쌓여만 가는 아티클들을 효율적으로 읽어가고 싶으시다면

<b>Readim</b>과 함께 세상의 변화를 빠르게 따라가 보세요!
</div>

## 🔗 Links
<div align="center">
  <a href="https://readim.site/">Deployed website</a> |
  <a href="https://github.com/Pangho04/readim-client">Frontend Repository</a> |
  <a href="https://github.com/Pangho04/readim-server">Backend Repository</a>
</div>

## 🗂️ Index
- [**🧲 Motivation**](#motivation)
- [**⚒️ Tech Stacks**](#️tech-stacks)
- [**🔍 Features**](#features)
  - [1. 랜딩 페이지](#1-랜딩-페이지)
  - [2. 메인 페이지](#2-메인-페이지)
  - [3. 아티클 카드](#3-아티클-카드)
  - [4. Footer 콘텐츠](#4-footer-콘텐츠)
- [**📈 Improvements**](#improvements)
  - [1. reading time UI 변경](#reading-time-ui-변경)
  - [2. 읽기 속도 기준](#2-읽기-속도-기준)
  - [3. 복수의 URL 병렬 요청 및 타임 아웃 처리](#3-복수의-url-병렬-요청-및-타임-아웃-처리)
  - [4. AWS 서버 메모리 부족 현상 대응](#4-aws-서버-메모리-부족-현상-대응)
- [**🎯 Challenges**](#-challenges)
  - [**1. 어떻게 단일 테스트로 다양한 사용자들의 읽기속도를 특정할 수 있을까?**](#1-어떻게-단일-테스트로-다양한-사용자들의-읽기속도를-특정할-수-있을까)
    - [1-1. 기준과 근거를 가진 기본 평균 범위 설정](#1-1--기준과-근거를-가진-기본-평균-범위-설정)
    - [1-2. 실제 사용자 테스트를 통한 유효한 범위 설정](#1-2-실제-사용자-테스트를-통한-유효한-범위-설정)
    - [1-3. 실제 사용 환경과 유사한 테스트 구현](#1-3-실제-사용-환경과-유사한-테스트-구현)
    - [1-4. 실제 사용자 피드백을 통한 테스트 방식 변경으로 사용자 경험 강화](#1-4-실제-사용자-피드백을-통한-테스트-방식-변경으로-사용자-경험-강화)
  - [**2. 어떻게 시멘틱 구조의 페이지에서 본문에 해당하는 텍스트만 추출할 수 있을까?**](#2-어떻게-시멘틱-구조의-페이지에서-본문에-해당하는-텍스트만-추출할-수-있을까)
    - [2-1. 시멘틱 구조에서 본문 판별하기](#2-1-시멘틱-구조에서-본문-판별하기)
    - [2-2. 불필요한 요소를 제외하자](#2-2-불필요한-요소를-제외하자)
    - [2-3. 코드 블록내의 단어는 어떻게 처리해야할까?](#2-3-코드-블록내의-단어는-어떻게-처리해야할까)
  - [**3. 시멘틱 태그가 없는 사이트의 스크래핑 방법?**](#3-시멘틱-태그가-없는-사이트의-스크래핑-방법)
    - [3-1. `<div>`와 `<script>` 뿐인 Velog](#3-1-div와-script-뿐인-velog)
    - [3-2. 유저들의 커스텀 스킨이 사용 가능한 Tistory의 경우](#3-2-유저들의-커스텀-스킨이-사용-가능한-tistory의-경우)
  - [**4. 포괄적 태그 사용 사이트의 상대적 스코어링을 통한 본문 추출**](#4-포괄적-태그-사용-사이트의-상대적-스코어링을-통한-본문-추출)
    - [4-1. 평가 기준](#4-1-평가-기준)
    - [4-2. 평가 결과](#4-2-평가-결과)
    - [4-3. `Puppeteer` 사용으로 CSR, SPA 대응](#4-3-puppeteer-사용으로-csr-spa-대응)
- [**🗓️ Schedule**](#️schedule)
- [**👏 Memoir**](#memoir)

## 🧲 Motivation

변화가 빠른 현대 사회, 하루에도 새로 알아야만 하는 것들이 수십개는 생겨나고 있습니다.

이런 흐름에 맞춰 우리는 어제 읽기로 마음 먹은 아티클도 채 소화하기도 전에, 오늘 새롭게 읽어보고 싶은 아티클이 북마크에 추가 될 것입니다.

<br/>

 **이런 아티클이 쌓여만 가는 현상을, 효율적으로 해소할 수 없을까?**

<br/>

이런 바람을 바탕으로 저희는 Readim 프로젝트를 시작했습니다.

여러분은 이동 시간, 여가 시간 등 아티클을 읽을 수 있는 짜투리 시간에 맞는 분량의 아티클을 Readim을 통해서 선택하실 수 있습니다.

지하철 이동 시간이 5분이 걸리시나요? Readim에 등록하신 아티클 중, 5분 분량의 아티클을 읽어보세요!

## ⚒️ Tech Stacks

### Client

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  ![Tailwind](https://img.shields.io/badge/tailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

<details>
  <summary>Why TailWind CSS?</summary>

사용하지 않는 CSS를 제거하는 purgeCSS 를 통해 파일 사이즈를 줄이고 로딩 속도를 향상시킬 수 있습니다.

미리 정의된 유틸리티 클래스들을 사용하여 별도의 CSS 파일을 작성하고 관리할 필요가 없어 개발 속도가 향상됩니다.

설정 파일을 통해 색상, 간격, 글꼴 등을 한 번에 관리할 수 있기 때문에 디자인 일관성 유지가 용이합니다.
</details>

### Server

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)  ![NODE.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)  ![NEST.JS](https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)  ![JSDOM](https://img.shields.io/badge/JSDOM-d7c146.svg?style=for-the-badge&logoColor=white)


<details>
  <summary>Why NestJS?</summary>
TypeScript 를 기본 언어로 지원합니다. 테스트 기능이 내장(jest)되어 있고 유닛, 통합 테스트를 작성할 수 있습니다.

<br/>

모듈화된 아키텍처를 강조하여 프로젝트 구조를 일관성 있게 유지할 수 있습니다.

저희는 추후 TypeScript로 마이그레이션 예정이고, 사용자가 추가로 구성해야 할 구조가 적고 러닝 커브가 낮은 점이 있어 선택하였습니다.
</details>

<details>
  <summary>Why JSDOM?</summary>
JSDOM을 선택한 주된 이유는 성능과 효율성 때문입니다.

<br/>

JSDOM은 Puppeteer에 비해 상당히 빠른 처리 속도를 제공합니다. 이는 우리 서비스의 응답 시간을 크게 개선하여 사용자 경험을 향상시킵니다.

물론, JSDOM이 클라이언트 사이드 렌더링(CSR)을 사용하는 웹사이트의 동적 콘텐츠를 처리하는 데 어려움이 있다는 점은 인지하고 있습니다.

하지만 아티클이 있는 블로그 사이트의 경우 대부분 서버 사이드 렌더링(SSR)을 하기 때문에 여러가지를 고려한 결과 JSDOM의 속도 이점이 CSR 관련 제한사항을 크게 상회한다고 판단했습니다.
</details>


### Test

![Vitest](https://img.shields.io/badge/Vitest-%2344A833.svg?style=for-the-badge&logo=vitest&logoColor=white)  ![cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)  ![jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)

### Deployment

![NETLIFY](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)  ![AWS ELASTIC BEANSTALK](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonwebservices&logoColor=white)

### Third party API

![OpenAI](https://img.shields.io/badge/ChatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)

## 🔍 Features

### 1. 랜딩 페이지

<table>
    <tr>
    <td width="50%">
      <h3>1-1. Welcome</h3>
  </td>
  <td width="50%">
      <h3>1-2. 읽기 속도 측정</h3>
    </td>
  </tr>
  <tr>
    <td width="50%">
        <img width="100%" alt="환영합니다" src="https://github.com/user-attachments/assets/ef05ecce-3407-4144-bd3e-61e958ec3370">
        <details>
          <summary>
            [자세히]
          </summary>
          - 가장 처음 방문할 시 마주할 수 있는 화면입니다.<br/>
          - 환영 랜딩 페이지을 통해 저희 Readim의 간단한 소개를 보실 수 있습니다.
        </details>
  </td>
  <td width="50%">
      <img width="100%" alt="읽기시간측정" src="https://github.com/user-attachments/assets/07fc3d1a-9f73-44ae-9abe-3d5c0060721f">
      <details>
      <summary>
        [자세히]
      </summary>
        - 해당 페이지를 통해 여러분 개개인의 읽기 속도를 측정할 수 있습니다.<br/>
        - 사용자는 테스트 아티클을 이해하려 하지 않고, 편안하게 본인 만의 속도로 본문을 읽습니다.<br/>
        - 다음 버튼을 통해 아티클을 마지막 까지 읽으면 읽기 속도 결과 페이지를 확인할 수 있습니다.
      </details>
    </td>
  </tr>
    <tr>
    <td width="50%">
    <h3>1-3. 읽기 속도 결과</h3>
    </td>
    <td width="50">
      <h3>1-4. 읽기 속도 재측정</h3>
    </td>
  </tr>
  <tr>
    <td width="50%">
    <img width="600" alt="결과" src="https://github.com/user-attachments/assets/facaeaec-5926-4dac-882a-2cb42f981f09">
    <details>
    <summary>
      [자세히]
    </summary>
    - 결과 랜딩 페이지에서 사용자 본인의 읽기 속도를 알 수 있습니다.<br/>
    - 이 랜딩 페이지에서 사용자는 본인의 읽기 속도가 빠른지, 평균인지, 조금 느린지의 세가지 척도로 확인할 수 있습니다.<br/>
    - 해당 결과 랜딩 페이지에 표시되는 읽기 속도(WPM)을 바탕으로 리딩 타임을 계산해 제공해드립니다.<br/>
    - 테스트에 응하지 않거나, 정상 설정 범위 (20초 ~ 2분 25초)를 벗어나는 결과일 경우 기본 읽기 속도(202WPM)으로 설정됩니다.
    </details>
    </td>
    <td width="50">
      <img width="600" alt="retry_1" src="https://github.com/user-attachments/assets/f2b3e8ef-0c2a-4e87-a138-520c2061e267"/>
      <details>
      <summary>
      [자세히]
      </summary>
      - 우측 상단의 톱니바퀴 모양의 버튼을 hover할 경우, ‘읽기 속도 재측정’ 안내 문구를 보실 수 있습니다.<br/>
      - 해당 버튼을 클릭함으로써 사용자는 첫 방문 시 랜딩 페이지을 통해 측정했던 읽기 속도를 재측정 할 수 있습니다.<br/><br/>
  <div align="center" style="display: flex; justify-content: space-around;">
<img width="45%" alt="당신에게 맞춘 리딩타임" src="https://github.com/user-attachments/assets/d56f81bb-9474-4169-b46b-cace8e5dd3ea">
<img width="45%" alt="읽기시간측정" src="https://github.com/user-attachments/assets/60211857-2c59-4f0e-a3ee-c544632c680c">
  </div> 
- 사용자가 재측정 기능을 이용하는 경우는 다음과 같이 가정했습니다.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;1. 아티클들을 접하며 사용자 본인의 읽기 능력이 상승하여 속도를 다시금 보정하기 위해.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;2. 초기에 읽기 속도 측정을 하지 않아 지정된 기본 읽기 속도를 본인의 읽기 속도로 바꾸기 위해.<br/>
- 해당 재측정 기능을 통해, 사용자는 다시금 정확한 리딩 타임을 제공받을 수 있습니다.
      </details>
    </td>
  </tr>
</table>

<br/>

### 2. 메인 페이지
<img src="https://github.com/user-attachments/assets/1d0f85e3-1497-4868-9cb7-d3e61f48c5b6" width="600" />
<details>
  <summary>
    [자세히]
  </summary>
- 읽기 속도 측정을 모두 마치고난 뒤, 처음으로 마주하실 수 있는 페이지입니다.<br/>
- 상단을 보시면, 사용자에게 궁극적으로 제공하고자 하는 컨셉들을 순환시키며 보여드리고 있습니다.<br/>
- 바로 하단의 URL 입력창에 사용자가 읽으려고 생각해둔 아티클의 주소를 입력하여 아티클 카드를 생성할 수 있습니다.
</details>

<br/>

### 3. 아티클 카드

<table>
  <tr>
    <td width="50%">
      <h3>3-1-1. URL 입력(아티클 카드 생성)</h3>
    </td>
    <td width="50%">
      <h3>3-1-2. URL 입력(토스트 메시지)</h3>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img width="100%" alt="URL 입력_아티클 카드 생성" src="https://github.com/user-attachments/assets/ba357884-93f1-4036-b8d4-d995c8c43dff" />
      <details>
        <summary>
          [자세히]
        </summary>
        - 사용자는 붙여넣기, 직접 입력하기, 북마크 폴더를 가져다 놓기의 상호작용을 통해 아티클 URL을 입력할 수 있습니다.<br />
        - URL을 입력한 후, Enter 혹은 입력창 옆의 버튼을 클릭하면 Node 서버에 리딩 타임 등의 정보를 요청합니다.<br />
        - 정보가 정상적으로 수신 될 경우 해당 아티클의 리딩 타임이 카드 형태로 추가됩니다.
      </details>
    </td>
    <td width="50%">
      <img width="100%" alt="대응할 수 없는 사이트의 URL_토스트 메시지" src="https://github.com/user-attachments/assets/09ab7b50-b3bf-4212-8818-86a6c0822e3f" />
      <details>
        <summary>
          [자세히]
        </summary>
        - 대응할 수 없는 사이트의 URL일 경우, 우측 하단에 토스트 메시지를 팝업합니다.
      </details>
    </td>
  </tr>
  <tr>
    <td>
      <h3>3-2-1. 아티클 카드</h3>
    </td>
    <td>
      <h3>3-2-2. 아티클 카드(애니메이션)</h3>
    </td>
  </tr>
  <tr>
    <td>
      <img width="100%" alt="아티클 카드 1" src="https://github.com/user-attachments/assets/11ac7d93-a40d-4318-b9cc-c988c9747240" />
      <details>
        <summary>
          [자세히]
        </summary>
        - 등록된 url의 카드에는 다음과 같은 내용이 포함되어 있습니다.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;1. 사이트 관련 정보: 사이트명, 사이트 파비콘<br />
        &nbsp;&nbsp;&nbsp;&nbsp;2. 아티클: 제목, 예상 읽기 시간<br />
        &nbsp;&nbsp;&nbsp;&nbsp;3. 버튼: 삭제 버튼, AI 요약 버튼<br />
        &nbsp;&nbsp;&nbsp;&nbsp;4. 최적화 인증 마크
      </details>
    </td>
    <td>
      <img width="100%" alt="아티클 카드 1" src="https://github.com/user-attachments/assets/5dd451bd-f6eb-4a6a-bad9-bf5640176885" />
      <details>
        <summary>
          [자세히]
        </summary>
        - 카드 hover 시, 선택된 카드의 크기가 커지는 애니메이션이 적용됩니다.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;1. 카드의 크기와 내용이 전체적으로 커집니다.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;2. 삭제 버튼이 나타납니다.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;3. 카드 클릭 시 아티클 페이지로 이동합니다.
      </details>
    </td>
  </tr>
  <tr>
    <td>
      <h3>3-3. 아티클 페이지 이동</h3>
    </td>
    <td>
      <h3>3-4. Chat GPT 요약</h3>
    </td>
  </tr>
  <tr>
    <td>
      <img width="100%" alt="아티클 페이지 이동" src="https://github.com/user-attachments/assets/a6037f2d-b8e3-47ec-bd05-daa414950828" />
      <details>
        <summary>
          [자세히]
        </summary>
        - 추가된 아티클 카드를 클릭할 경우 해당 아티클 페이지로 이동할 수 있습니다.
      </details>
    </td>
    <td>
      <img width="100%" alt="Chat GPT 요약" src="https://github.com/user-attachments/assets/496bd3c2-6474-468a-8085-6b68a47a8060" />
      <details>
        <summary>
          [자세히]
        </summary>
        - 아티클 카드 내 요약 버튼 hover 할 경우 '본문 요약' 문구를 확인할 수 있습니다.<br />
        - 아티클 카드 내 요약 버튼을 클릭할 경우 Chat GPT를 통해 요약된 본문 내용을 확인할 수 있습니다.
      </details>
    </td>
  </tr>
</table>

<br/>

### 4. Footer 콘텐츠

<img width="600" alt="Footer" src="https://github.com/user-attachments/assets/d96ba5dc-4de0-4e00-926c-e1939262e159">
<details>
  <summary>
    [자세히]
  </summary>
- 페이지 하단(footer)에는 기타 정보를 표시하고 있습니다.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;1. 현재 정식적으로 대응하고 있는 6개의 사이트를 사용자에게 알려줍니다.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;2. 피드백 사항이 있을 경우 연락하실 수 있는 연락처를 표시합니다.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;3. Readim의 저작권 고지를 표시합니다.
</details>
<br/>

## 📈 Improvements

<h3>1. UI, UX 구현</h3>

#### reading time UI 변경

#### [🔗 UI 선정 및 개선 과정](https://www.notion.so/UI-6b0bb4d7e65f486b8f29636711d6eada?pvs=4)

#### <기존안>

<img src="https://github.com/user-attachments/assets/803ce74d-a4ef-4125-82ba-a511d6a1891d" width="600" />

- 기존안을 제작하면서, 제작자들의 미적 충족감만을 고려하여, 사용자를 위하지 않는 디자인을 만들었습니다.
리딩 타임의 border는 리딩 타임의 숫자에 따라 변할 것 같이 디자인 됐지만, 사실 고정 이미지로 사용자에게 오해를 불러일으켰습니다.
또한 메인 feature로 기능하는 리딩 타임이지만, 사용자에게 분 단위의 정보 밖에 전달하지 않았습니다.

#### <개선안>

<img src="https://github.com/user-attachments/assets/8ce28eeb-8f6b-46ab-81a3-a90fc4430a63" width="600" />

- 30초 단위를 보여줌으로써 사용자는 조금 더 자세한 정보를 확인할 수 있습니다.
    - 시간 단위 설정 기준
        - **30초 단위**: 대략적인 시간 확인이 필요한 상황에서 편리합니다.
        - **10초 단위**: 중간 정도의 세밀함이 필요한 상황에서 적합합니다.
        - **1초 단위**: 매우 세밀하고 정확한 시간이 필요한 상황에서 유용합니다.
    - 사용자들의 읽는 환경의 다양한 상황을 고려하여, 30초 단위로 리딩 타임을 보여줌으로써 환경 변수에 유동적으로 대응할 수 있도록 표시하였습니다.
- 리딩 타임과 타이틀을 강조한 UI를 채택함으로써 시인성을 개선했습니다.
- 또한 썸네일, 본문 요약 등을 제거하고 Favicon과 도메인을 작게 표시하여, 효율적으로 필요한 정보만을 사용자들이 쉽게 인식할 수 있도록 했습니다.

<br/>

 <h3>2. 읽기 속도 기준</h3>

> [!Important]
> ✅ **평균 리딩 타임**
> 
> 한국인이 글을 읽는데 걸리는 평균 속도입니다.
> 
> 1분 동안 읽을 수 있는 단어 수, 즉 WPM(_Words Per Minute_)으로 측정합니다.


1. 실제 주변 지인들에게 조사한 결과 대부분의 인원들은 평균 범위에 속하였지만, 일부 소수의 분들이 최소 시간을 벗어나는 경우를 발견하여, 이런 분들을 배려하기 위해 최소 시간 기준을 20초로 설정하였습니다.
최대 시간의 경우, 논문을 바탕으로 한다면 20~30대를 대상으로 고려하여, 1분 26초를 최대 범위로 정하였지만, 그 외의 대상들도 고려하기 위해 텍스트를 직접 읽는 TTS서비스를 이용한 결과 2분 25초가 나왔습니다. 비정상적인 접근을 제외한, 글을 느리게 읽는 분들의 경우에도 충분히 배려하며 속도를 반영하기 위해 보수적으로 정하였습니다.
2. 논문 차용 부분

> 이 연구에서는 노안이 없는 20-30대의 정상인을 대상으로 정상 평균 읽기 속도를 조사하였다. 문서에서 흔히 사용하는 10포인트의 글자 크기는 근거리 시력표에서 logMAR 0.5 (대 수시력 0.32)에 해당하는 크기이며, 평균 읽기 속도(reading only)는 202.3 ± 88.4 WPM, 읽기-말하기 속도(reading & speaking)는 129.7 ± 25.9 WPM이었다.
송지호⋅김재형⋅형성민(2016). 한국어 읽기 속도 측정 애플리케이션의 유효성 및 정상인의 읽기 속도에 대한 사전 연구. 대한안과학회지, [2016년 제57 권 제4 호.](http://dx.doi.org/10.3341/jkos.2016.57.4.642) 
> 

- [참고 논문](https://www.riss.kr/search/detail/DetailView.do?p_mat_type=1a0202e37d52c72d&control_no=0f981f4e022986487ecd42904f0c5d65&keyword=%EC%9D%BD%EB%8A%94%20%EC%86%8D%EB%8F%84)

<br />

<h3>3. 복수의 URL 병렬 요청 및 타임 아웃 처리</h3>

#### <기존안>
**`forEach` + `aync`/`await` 사용**

<img height="100" src="https://github.com/user-attachments/assets/1ad09345-c6a3-4ebf-91df-00cba88f76b9">

- 사용자가 입력한 복수의 URL의 응답을 입력 순서대로 표시하기 위해 `forEach` + `async`/`await`을 사용하여 요청했습니다.</br>
  하지만, 사용자 URL 입력 순서가 큰 의미를 가지지 않으며, 응답 속도의 개선이 사용자 경험에 더 큰 의미를 준다고 깨달아 개선의 필요성을 느꼈습니다.</br>

#### <개선안>
**`Promise.allSettled` 사용**

<img height="100" src="https://github.com/user-attachments/assets/c5dbb675-f54f-4317-84d8-af5ed6b9b38f">

- 위와 같은 문제점을 해결하기 위해 `Promise.allSettled`를 사용하여 비동기 요청을 병렬로 수행하며, 각 응답 결과를 조회 가능한 방식을 적용했습니다.</br>
  각 요청의 응답 결과를 배열로 반환하기 때문에, 각 케이스에 개별로 대응할 수 있습니다.</br>
  또한, 각 요청에 대해 개별적인 대응이 가능하므로, AbortController를 사용해 타임아웃을 설정할 수 있으며, 모든 예외 케이스를 사용자에게 Toast 메시지로 즉시 알릴 수 있습니다.</br>
  결과적으로 사용자는 요청에 대한 즉각적인 피드백을 받을 수 있어, 전반적인 사용자 경험이 개선되었습니다.

</br>

<h3>4. AWS 서버 메모리 부족 현상 대응</h3>

#### <문제점>
**메모리 부족으로 인한 서버 다운**

상대적 스코어링 본문 추출 로직 추가로 인해, `puppeteer`를 사용하여 본문을 추출할 경우 서버가 다운되는 현상을 마주하게 됐습니다.

이후 원인을 조사한 결과 `Headless Browser`를 통해 크롤링을 시도하며, 메모리를 과하게 점유하였기 때문으로 추론할 수 있었습니다.
현재 사용중인 서버의 인스턴스는 가상 1 코어 CPU, 1GB RAM으로 굉장히 저사양의 인스턴스를 사용중이기 때문에 쉽게 RAM이 과하게 점유될 수 있었습니다.

- **당시 서버 CPU, RAM 점유율**
<img height="250" alt="server memory out" src="https://github.com/user-attachments/assets/f80ebfe5-3d46-4e92-b61d-5acd90259b12">

이러한 현상을 해결하기위해 조사하던 중, `Swap Memory`를 통해 **가상 메모리**를 구현하여 해당 문제를 해결할 수 있음을 알게 됐습니다.

- **`Swap Memory`란?**
<img height="300" alt="swap memory" src="https://github.com/user-attachments/assets/47b15651-cd22-4c96-acd2-fd37b8c31640">

- 가상 메모리를 구현하는 방법 중 하나, 물리적 메모리(RAM)이 부족할 때 추가적으로 메모리에 자원을 할당하기 위해 사용합니다.
- 일반적으로 HDD나 SSD를 사용하며, RAM보다는 속도가 느립니다.

**작동 원리**
- RAM이 부족할 경우 사용되지 않는 `page`(메모리 단위)를 `Swap Memory`로 이동시킵니다.
- 해당 `page`가 다시 필요할 경우, `Swap Memory`에서 RAM으로 `page`를 로드합니다.

#### <해결안>
**`SSH`를 통해 `Swap Memory` 할당**

`SSH`를 통해 EC2 인스턴스에 접속한 후, `swapfile`생성 등 일련의 과정을 수행하여 `Swap Memory`로 2GB의 가상 메모리를 할당한 결과 메모리 점유에 여유가 생겨 서버가 다운되는 현상을 해결할 수 있었습니다.

- **`Swap Memory` 할당 후, `puppeteer`사용 시 메모리 사용량**
<img height="500" alt="Server Memory" src="https://github.com/user-attachments/assets/913cfc1b-b1c2-45ae-8db0-ef27a3fec9b9">

<br/>

## 🎯 Challenges

### **1. 어떻게 단일 테스트로 다양한 사용자들의 읽기속도를 특정할 수 있을까?**
    
  저희는 한국어 평균 읽기 시간에 대한 리서치를 통해 202WPM 이라는 평균 읽기 시간을 설정하였습니다.
  
  하지만 평균 읽기 시간 기준으로 아티클 별 읽기 속도를 측정하는 것은 다음과 같은 문제들이 있었습니다.
  
  - 실제 '평균' 읽기 속도는 개인차와 읽는 내용의 난이도에 따라 속도가 크게 달라지기 때문에 근사치를 특정하기가 어렵습니다.
  - 평균 속도만 고려할 경우, 읽기속도가 빠르거나 느린 사용자의 정확한 읽기 속도를 특정하기 어렵습니다.
  - 개인의 읽기 속도가 콘텐츠에 따라 변할 수 있는 점을 반영하기 어렵습니다.
  
  이러한 문제들을 다음과 같은 과정을 통해 해결하고자 했습니다.

#### 1-1.  기준과 근거를 가진 기본 평균 범위 설정

<img width="600" src="https://github.com/user-attachments/assets/cf97f1b3-9b20-4f57-a7fe-c94014fee844" alt="평균읽기시간-1" />

먼저 정확한 읽기 시간을 제공하기 위해 평균 읽기 속도를 나타내는 수치가 필요했습니다.

리서치를 통해 한국어 평균 읽기 시간을 202WPM으로 기준값으로 설정하였고, 202단어의 테스트 글을 선택해 일관된 방법으로 사용자의 읽기 시간을 측정할 수 있도록 했습니다.

#### 1-2. 실제 사용자 테스트를 통한 유효한 범위 설정

<img width="600" src="https://github.com/user-attachments/assets/d866847f-7885-4640-9a6c-c3ae4e08c679" alt="평균읽기시간-2" />

여러 사용자들을 대상으로 실제 읽기 테스트를 진행하여 데이터를 수집했습니다.

테스트 결과와 함께 접근성을 고려하여 텍스트 음성 변환 기술을 사용하는 경우의 읽기 속도를 결과 데이터에 포함시켰습니다. 

여러 데이터를 종합적으로 분석한 결과, 

- 가장 빠른 읽기 속도는 테스트를 통해 확인된 읽기속도 25초 (WPM: 484.8)입니다.
- 가장 느린 읽기 속도는 음성 변환 기술을 사용한 읽기속도 2분 25초 (WPM: 84.2)입니다.

최종적으로 20초 ~ 2분 25초 (WPM: 484.8 ~ 84.2)의 유효 읽기 속도 범위를 설정했습니다.

#### 1-3. 실제 사용 환경과 유사한 테스트 구현

주요 서비스 대상층인 개발자들이 접하는 환경과 유사한 테스트를 구현하기 위해 다음과 같은 기준으로 테스트를 작성 및 선정했습니다.

- 설명문, 코드 예시, HTML 마크업 등 다양한 요소를 포함하여 실제 개발 문서와 유사한 구조를 만들었습니다.
- 총 202단어로 구성하여 기준값인 202WPM과 직접적으로 비교할 수 있게 했습니다.
- 테스트 글을 특징 별로 구조화 하여 실제 개발문서의 다양한 읽기 속도를 반영할 수 있도록 했습니다.

구조화한 테스트 글은 다음 항목으로 구분됩니다.

<img width="600" src="https://github.com/user-attachments/assets/6ccdc377-7b42-4d17-85ad-c3b22b72817c" alt="테스트-설명문" />    

1. **일반 글**: 일반적으로 쉽게 읽혀지는 내용으로, 대부분의 사용자가 빠르게 읽을 수 있는 부분입니다.

<br/>
<br/>

<img width="600" src="https://github.com/user-attachments/assets/fc20e2eb-70e6-45c7-9b91-0e456bf18c31" alt="테스트-코드블럭" />

2. **코드블럭**: 일반 글과는 다르게 읽히는 경향을 가지고, 코드의 복잡성이나 개인의 수준에 따라 읽기속도에 편차가 있을 수 있는 부분입니다.

<br/>
<br/>

<img width="600" src="https://github.com/user-attachments/assets/54df72a6-12d0-4faa-bdec-a9577ea78aec" alt="테스트-상세설명" />

3. **상세 설명**: 기술적인 설명이나 다양한 맥락을 고려해야하기 때문에 일반적으로 주의 깊게 읽어야 하는 부분입니다.

<br/>

이와 같은 테스트 글 구조화를 통해 다음과 같은 효과를 기대할 수 있는 테스트 글을 작성할 수 있었습니다.

- 개발자들이 실제로 접하는 문서와 유사한 형태로 읽기 속도를 측정할 수 있습니다.
- 각 섹션별 읽기 속도의 차이를 통해 개발 기술 문서의 평균 적인 읽기 속도를 평가할 수 있습니다.
- 단순한 평균 읽기 속도 측정을 넘어선 주요 대상층에 대한 유의미한 데이터를 얻을 수 있습니다.

이렇게 개발 문서의 실제 읽기 패턴 반영을 통해 더욱 정확하게 대상층의 평균 읽기속도을 특정할 수 있도록 하였습니다.

#### 1-4. 실제 사용자 피드백을 통한 테스트 방식 변경으로 사용자 경험 강화

배포 이후 실제 사용자들의 피드백을 바탕으로 기존의 테스트 방식에서 발견된 한계점들을 보완하였습니다.<br/>
이를 통해 더욱 정확하고 신뢰 가능한 읽기 속도 측정 시스템을 구현했습니다.

<table>
  <tr>
    <td width="50%">
      <h3>기존안: 스크롤 형태</h3>
    </td>
    <td width="50%">
      <h3>개선안: 슬라이드 형태 </h3>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img width="100%" alt="기존안 스크롤 테스트" src="https://github.com/user-attachments/assets/c9febe17-cfbf-4ee7-bcc1-4e083880ff4b" />
    </td>
    <td width="50%">
      <img width="100%" alt="개선안 슬라이드 테스트" src="https://github.com/user-attachments/assets/c3402f00-d8e2-4884-855f-2a53eb8f8e69" />
    </td>
  </tr>
</table>
<br/>

주요 개선 사항은 다음과 같습니다.

<br/>

**1-4-1. 스크롤 조작을 통한 테스트 회피 방지**<br/>
사용자가 테스트 글을 빠르게 스크롤하여 실제로 읽지 않고 테스트를 완료하는 경우가 있었습니다.<br/>

이러한 문제를 개선하기 위해 테스트 글을 단계별로 렌더링하여 사용자가 한 번에 하나의 테스트 문장만 볼 수 있도록 제한했습니다.<br/>
이를 통해 사용자의 실제 읽기 여부를 더 정확히 확인할 수 있게 되었습니다.

<br/>

**1-4-2. 최소 읽기 시간 보장**<br/>
위에서 제시한 개선안도 마찬가지로 읽지 않고 계속 클릭하는 경우 즉시 다음으로 넘어가 테스트를 완료할 수 있었습니다.

개선안을 추가 보완하기 위해 각 테스트 문장의 최소 읽기 시간을 동적으로 계산해 해당 시간 동안 버튼을 비활성화하는 로직을 구현했습니다.<br/>
이를 통해 최소 읽기 시간을 보장해 사용자의 실제 읽기 시간의 신뢰도를 향상시킬 수 있었습니다.

<br/>

**1-4-3. 사용자 경험을 고려한 UI / UX 개선**<br/>
기존 테스트의 부족한 점과 개선된 테스트에 대응하는 UI / UX를 개선하였습니다.

<img width="600" alt="개선된 UI/UX" src="https://github.com/user-attachments/assets/07fc3d1a-9f73-44ae-9abe-3d5c0060721f">

- 진행 상황 표시를 추가하기 위해 동적으로 업데이트되는 프로그레스 바를 구현하여 현재 진행률을 시각화했습니다.
- 최소 읽기 시간을 `다음 글까지 n초 남았어요` 로 표현하여 다음 버튼 활성화 시간을 시각화했습니다.<br/>
  시간이 초과될 경우 동적으로 텍스트를 변경하여 다음 글로 넘어갈 수 있도록 텍스트를 변경하고 버튼을 활성화하였습니다.
- 코드 블록의 가독성 향상을 위해 코드블록을 토큰화하여 하이라이팅하는 알고리즘을 구현해 알맞은 스타일을 적용했습니다.

<br/>

이러한 개선을 통해 다음과 같은 여러 효과를 얻을 수 있었습니다.

- 사용자들의 피드백을 받아 테스트의 신뢰도와 유효성을 향상시켰습니다.
- 개선된 UI / UX를 통한 사용자 경험의 질을 증가시켰습니다.

<br/>

### 2. 어떻게 시멘틱 구조의 페이지에서 본문에 해당하는 텍스트만 추출할 수 있을까?

사용자가 입력한 주소의 아티클 리딩 타임을 계산하기 위해서는 아티클의 여러 요소 중 본문 내용만을 가져와야 했습니다.

하지만 대부분의 사이트에는 아티클과 관련 없는 요소들이 함께 포함되어 있으며, 광고나 댓글과 같이 리딩 타임 계산 시 제외되어야 하는 요소가 본문 내에 포함되는 경우도 있습니다.

이런 다양한 경우를 모두 대응하기에는 복잡성이 높기 때문에, 저희는 우선 웹사이트를 크게 시멘틱 구조와 비시멘틱 구조로 나누어 문제를 해결하고자 했습니다.

> [!NOTE]
> 1. 시멘틱 구조의 특징: `<header>`, `<nav>`, `<aside>`, `<section>`, `<article>`, `<footer>` 등의 시멘틱 태그를 사용하여 구조를 명확히 파악할 수 있습니다.
> 2. 비시멘틱 구조의 특징: 일반적인 태그를 주로 사용하며, HTML 코드만으로는 구조를 파악하기 힘듭니다.

<br />

<img width="1000" alt="image" src="https://github.com/user-attachments/assets/b7d2b6eb-3739-4aa8-afae-95f92d36b756">

<br/>
<br/>


#### 2-1. 시멘틱 구조에서 본문 판별하기

시멘틱 태그는 각 태그마다 역할이 있기 때문에, 저희는 본문 내용을 추출할 태그의 기준을 만들었습니다.

- 본문으로 포함되는 태그: `<main>`, `<article>`, `<section>`

먼저 HTML DOM 트리 구조를 DFS로 순회하면서 본문 요소가 될 가능성이 있는 `<main>`, `<article>`, `<section>` 태그의 요소들을 메모리에 적재했습니다.

- 본문 태그가 없는 경우: 비시멘틱 구조 대응 로직으로 판별합니다.

<div align="center">
  <img width="400" alt="dfs" src="https://github.com/user-attachments/assets/d11e84e0-202e-4e70-844b-786f9420f990">
</div>

<br/>

#### 2-2. 불필요한 요소를 제외하자

블로그 아티클의 특성상 본문 내에 광고, 댓글, 다른 글 소개 등 본문 내용과 관련 없는 요소가 포함되는 경우가 많았습니다. 이를 제거하기 위한 로직이 필요했습니다.

저희가 필요한 최종 결과물은 리딩 타임 계산을 위한 본문 텍스트의 총 단어 수이기 때문에, 본문 텍스트와 관련 없는 태그는 제외하기로 했습니다. 같은 맥락에서, 이미지나 동영상 같이 보는 데 걸리는 시간을 파악하기 어려운 미디어 요소를 제외했습니다.

이를 위해 여러 사이트를 조사하여 본문에서 제외할 태그를 아래와 같이 결정했습니다.


|          콘텐츠 섹션 및 레이아웃           |            멀티미디어            |          인터랙티브 요소          |      스크립트 및 스타일       |      임베디드 콘텐츠       |       기타       |
|:-----------------------------------------:|:--------------------------------:|:---------------------------------:|:----------------------------:|:-------------------------:|:----------------:|
| ```<nav>```                               | ```<audio>```                    | ```<button>```                    | ```<script>```               | ```<img>```               | ```<progress>``` |
| ```<aside>```                             | ```<canvas>```                   | ```<select>```                    | ```<style>```                | ```<svg>```               |                  |
| ```<footer>```                            | ```<embed>```                    | ```<option>```                    | ```<noscript>```             | ```<meta>```              |                  |
|                                           | ```<iframe>```                   | ```<optgroup>```                  |                              |                           |                  |
|                                           | ```<object>```                   | ```<map>```                       |                              |                           |                  |
|                                           | ```<picture>```                  | ```<area>```                      |                              |                           |                  |
|                                           | ```<source>```                   |                                   |                              |                           |                  |

이러한 기준을 바탕으로 1-1 과정을 통해 가려낸 본문 요소에서 불필요한 요소를 제외하는 과정을 거쳤습니다.

<br/>

#### 2-3. 코드 블록내의 단어는 어떻게 처리해야할까?

저희 Readim에서 제공하는 예상 리딩 타임의 기준이 WPM(분당 단어 수)이기 때문에 글자 수를 정확하게 파악하는 것이 목표 중 하나였습니다. 따라서 주 타겟층인 개발자가 보는 아티클에서 자주 등장하는 코드 블록 내의 문자를 어떻게 처리할지 고민했습니다.


<img width="600" alt="codeblock" src="https://github.com/user-attachments/assets/82ed99a2-597e-4e33-9fce-92c860398803">


1. 본문 텍스트에서 특수문자는 불필요하다고 판단하여 제거했습니다.
2. `<LikeButton>` 컴포넌트처럼 **camelCase**나 **PascalCase**를 사용할 때 코드 상에서는 한 단어지만 읽을 때는 두 단어로 읽히므로, 이를 두 단어로 분리하는 작업을 진행했습니다.
3. 최종적으로 본문 요소와 하위 요소의 텍스트를 추출했습니다.
4. 추출한 텍스트의 단어 수를 구한 후 사용자별 리딩 타임을 계산했습니다.

<br/>

### **3. 시멘틱 태그가 없는 사이트의 스크래핑 방법?**
  
  #### 3-1. `<div>`와 `<script>` 뿐인 Velog
  
  <img width="600" alt="01" src="https://github.com/user-attachments/assets/1999c340-b38b-4d21-b3bc-6c0ef01b0ac1">
  
  **문제점:** 위의 사진과 같이, `<body>` 태그 내부에는 오직 `<div>` 와 `<script>` 태그만이 존재했습니다.
  
   또한, **클래스 네임 난독화(Class Name Obfuscation)** 로 인해 기존 로직으로는 Velog 사이트의 아티클 본문을 스크래핑하는 것이 불가능했습니다.
  
  **해결 방안**: 여러 개의 Velog를 조사하며, 난독화가 매번 새로운 난독화 된 코드를 생성하는 것이 아니라는 것을 발견하여 클래스 네임에서 공통점을 찾을 수 있었습니다.
  
  - 타이틀 클래스 네임
  
  <img width="600" src="https://github.com/user-attachments/assets/2b5b9b5e-de10-43a0-a1af-13bf0b67f0ce">

  <br/>
  <br/>
  
  - 메인 콘텐츠 클래스 네임
  
  <img width="600" src="https://github.com/user-attachments/assets/03c19b23-1e99-41eb-ad12-bb13e982ca5a">
  
  항상 클래스 네임에 **`TBWPX`** 를 포함한 요소는 **아티클의 타이틀** 을 나타내었으며, **`dFtzxp`** 를 포함한 요소는 **아티클의 메인 콘텐츠** 를 나타내고 있었습니다.
  
  - 함수 순서도
    
  <div align="center">
    <img width="800" alt="04" src="https://github.com/user-attachments/assets/9e06a8be-28d3-4347-9a29-56ead32b5024">
  </div>
  
  해당 클래스 네임의 공통점을 발견하여, Velog 사이트가 입력될 경우엔 해당 규칙으로 메인 콘텐츠를 분류하는 함수를 실행하게 하여 성공적으로 스크래핑을 수행할 수 있었습니다.
  
  #### 3-2. 유저들의 커스텀 스킨이 사용 가능한 Tistory의 경우
  
  **문제점**: Tistory는 다양한 유저들이 만든 커스텀 스킨과 일반 시멘틱 태그 스킨의 혼용이 가장 큰 문제였습니다.
  
  - `<div>` 태그이면서 다양한 클래스 네임을 사용한 예.


<table>
  <tr>
    <td align="center" style="border: 10px solid black; padding: 10px;">
      <img width="300" alt="05" src="https://github.com/user-attachments/assets/c1c01850-6a48-4e82-adcb-1ec61f3d257c" />
    </td>
    <td align="center" style="border: 10px solid black; padding: 10px;">
      <img width="300" alt="06" src="https://github.com/user-attachments/assets/3cc5ad45-b0d5-4b9c-8133-489c0bdf63c5" />
    </td>
    <td align="center" style="border: 10px solid black; padding: 10px;">
      <img width="300" alt="07" src="https://github.com/user-attachments/assets/a34ef152-c82c-4041-8e95-833c357038b6" />
    </td>
  </tr>
</table>

  커스텀 스킨의 경우, 시멘틱 태그를 준수하지 않으며 블로그마다 상이한 클래스 명과 무분별한 태그 사용으로 인해 본문 판별이 곤란했기 때문입니다.
  
  **해결 방안:** Tistory도 마찬가지로 여러 개의 블로그를 조사하며, 법칙을 찾았습니다.
   조사 결과,
  
  - `<main>`으로 판별할 수 있는 클래스 명
  
  `area_view`, `tt_article_useless_p_margin`, `contents_style`, `article_skin`
  
  - `<main>`으로 판별할 수 있는 ID
  
  `article-view`, `mArticle`
  
  - 본문에서 제외돼야 할 클래스 명
  
  `footer`, `summary`, `reply`, `tag`
  
  - 함수 순서도

  <div align="center">
    <img width="800" alt="08" src="https://github.com/user-attachments/assets/1d50f854-1776-4b64-85ea-78bd647d71dd">
  </div>
  
  결과적으로, Tistory 사이트가 입력될 경우, 시멘틱 태그 대응 함수를 실행시킨 후 반환 값이 없으면 언급한 Tistory 규칙을 적용하여 메인 콘텐츠 내용을 얻을 수 있었습니다.

<br>

### **4. 포괄적 태그 사용 사이트의 상대적 스코어링을 통한 본문 추출**

본문뿐만 아닌 광고, 댓글 등의 많은 요소도 시멘트 태그로 묶거나, 언급한 비시멘틱 사이트 이외의 규칙성에 대응에는 한계가 있었기 때문에 해결책을 강구해야 했습니다.

이러한 문제를 해결하기 위해 모든 요소를 DFS로 순회하며, 배제할 태그를 제거한 후 남은 요소들의 <br>
**'텍스트 길이', '링크 비율', '태그 명', '클래스 명', 'ID'** 데이터를 수집하여 상대적 스코어링을 통해 본문을 판별했습니다.

  #### 4-1. 평가 기준
  - **텍스트 길이**
    - 대상: `textLengthScore`
    - 가중치: 10%
    - 텍스트 길이의 경우, 글이 주된 콘텐츠가 되는 아티클의 특성상 1,000을 가볍게 넘기므로 가중치를 줄였습니다.

  - **태그명, 클래스명, ID가 본문을 나타내는 이름일 경우 가산점**
    - 대상: `article` = 30점, `section` = 30점, `main` = 10점
    - 가중치: TagName = 70%, ClassName = 50%, ID = 50%
    - 시멘틱 태그를 나타내는 경우 높은 가중치로 유력하게 했으며, 다른 이름들의 경우 하위 속성에도 중복하여 사용하는 양상이 많아 50%를 부과하였습니다.

  - **링크 비율(페널티)**<br>
    - 대상: `linkElements.length` / `allElements.length`
    - 가중치: 100%
    - 링크 비율을 점수화하여 해당 페널티를 100% 부과하여, 요소 대부분이 링크로 이루어진 경우 제외하도록 했습니다.

  - **전체 요소 중, 해당 요소의 자손 비율(페널티)**<br>
    - 대상: `elementRatio` = 1 - (`childrenElements` / `allElements`)
    - 가중치: 100%
    - 해당 요소의 깊이가 얕을수록 페널티를 부과합니다. 자식 요소들이 큰 비중을 차지한다면 본문을 포함하는 부모 요소일 가능성이 높아 100%의 페널티를 부과합니다.

#### 4-2. 평가 결과

- 해당 기준을 바탕으로 한 스코어링을 통해 다음과 같은 결과 중 가장 높은 요소를 반환합니다.
``` js
Element: div
Total Score: 0.0027574271004644343
Text Length Score: 0.027682938082495157
Tag Name Score: 0
Class Name Score: 0
ID Score: 0

Element: strong
Total Score: 0.002762860454356975
Text Length Score: 0.027682938082495157
Tag Name Score: 0
Class Name Score: 0
ID Score: 0

Element: span
Total Score: 0.0009218590437677483
Text Length Score: 0.009227646027498385
Tag Name Score: 0
Class Name Score: 0
ID Score: 0

Element: div
Total Score: -17.743418749839343
Text Length Score: 0.7883046177777192
Tag Name Score: 0
Class Name Score: 0
ID Score: 0

...

LOG [CustomLoggerService] Best: DIV, Score: 3.5871138232401383
```
이후, 기존 로직들에서 사용한 텍스트 병합 함수들을 재사용하여 최종적으로 본문을 반환합니다.

#### 4-3. `Puppeteer` 사용으로 CSR, SPA 대응

상기 언급한 모든 로직들의 파싱 결과 내용이 존재하지 않거나, 200자 이하인 경우 스코어링 로직으로 재파싱을 시도합니다. 이때 `Puppeteer`의 Headless browser를 통해 페이지를 로드한 후 파싱을 진행하여 `CSR`, `SPA` 방식의 사이트도 스크래핑이 가능합니다.

- **불필요한 리소스 요청 차단**
```js
    await page.setRequestInterception(true);
    page.on("request", (request) => {
      if (
        ["image", "stylesheet", "font", "media"].includes(
          request.resourceType(),
        )
      ) {
        request.abort();
      } else {
        request.continue();
      }
    });
```
- `puppeteer` 사용 시의 단점인 긴 작업 시간을 극복하기 위해 불필요한 리소스의 경우 요청을 차단하는 로직을 사용했습니다.
- 본문 텍스트 요소를 파싱하는데 불필요한 '이미지', '스타일 시트', '폰트', '미디어' 요소를 차단하여 페이지 로딩 속도를 높입니다.

<br>

## 🗓️ Schedule

<div align="center">
  <table >
    <tr>
      <th>주차</th>
      <th>내용</th>
    </tr>
    <tr>
      <td>1주차</td>
      <td>
        - 아이디어 수집, 선정<br>
        - 기술 스택 결정 및 학습<br>
        - Git 작업 플로우 결정<br>
        - KANBAN 작성
      </td>
    </tr>
    <tr>
      <td>2주차</td>
      <td>
        - 프로젝트 세팅<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- Client: 리액트, Vitest, Cypress<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- Server: Nest.js, Jest<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- ESLint, Prettier, Husky 설정<br>
        - 페이지 구현<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- 메인 페이지 구현<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- 헤더 구현<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- 토스트 메시지 구현<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- 랜딩 페이지 구현<br>
        - 알고리즘 작성<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- 본문 판별 알고리즘 구현<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- reading time 알고리즘 구현<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- 코드 블록 대응 알고리즘 구현
      </td>
    </tr>
    <tr>
      <td>3주차</td>
      <td>
        - velog, tistory 대응 본문 판별 알고리즘 구현&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
        - 세부 요소 추가 제작 및 수정<br>
        - 사용자 피드백 반영
      </td>
    </tr>
  </table>
</div>

## 👏 Memoir

<details>
<summary>이재훈</summary>
팀 프로젝트를 통해 개발자 개인의 취향을 우선하는 것이 아닌 사용자를 위한 서비스가 어떤것인지 깊게 고민해보고 분석하고 구현해내는 경험을 할 수 기회가 있어서 좋았습니다.

사용자의 필요를 우선하는 결정을 고민하고 적용하면서 서비스의 품질이 크게 향상되는 것을 느낄 수 있었습니다.

팀원들과 서로 조율하고 배려하는 것도 물론 중요했지만 때로는 의견을 내 서로 부딪히고 의견을 좁혀가는 것도 각자가 아닌 하나의 팀으로써 하나의 프로젝트를 만들어 가는 과정이라고 느꼈습니다.

프로젝트가 진행될수록 의사 결정 시간이 점점 짧아지고 팀원들과 서로 동기화되고 있다는걸 느끼는 순간들이 재밌다고 생각했고, 서로에게 많은 도움을 주고 받으며 성장한 것 같아서 즐거운 시간이었습니다.

팀 프로젝트 기간동안 기술적 성장 외에도 소통 능력에 있어서도 많은 것을 배울 수 있었고 이번 경험을 바탕으로 질적으로 성장된 개발과 협업을 할 수 있을 것 같아 앞으로가 더 기대가 됩니다.
</details>

<br/>

<details>
<summary>오지은</summary>
이번 팀 프로젝트를 진행하면서 얻은 경험과 배움이 많았습니다.

우선 팀원들과의 협업을 통해 각기 다른 의견을 조율하고 조화롭게 통합하는 법을 배웠습니다. 서로 다른 아이디어를 존중하고, 더 나은 해결책을 찾기 위해 토론하고 합의하는 과정은 매우 유익했습니다. 이러한 경험은 팀워크의 중요성을 다시 한 번 느끼게 했습니다.

또한 프로젝트를 진행하면서 기술적인 문제뿐만 아니라 시간 관리, 우선순위 설정, 사용자 중심 서비스 개발의 중요성 등 여러 가지 측면에서 배운 점이 많았습니다.

마지막으로 Git 전략, 오류 처리,  HTML 태그, nest.js 등 유용한 기술들을 익히는 데 도움이 되었고, 이를 통해 개인적으로도 성장을 이룰 수 있었습니다.
</details>

<br/>

<details>
<summary>이창호</summary>
묵묵히 진행하다보면 개발자의 취향과 의도에만 묻히게 되는 단점을 팀원들과의 대화를 통해 극복할 수 있었습니다.

기능 및 UI/UX 구현 시 항상 사용자 입장에서 생각하는 태도가 중요했습니다. 이를 위해 팀원들과 지속적으로 의견을 나누며, 사용자의 편의성과 경험을 최우선으로 고려하는 개발을 진행했습니다.

또한, 개발 과정에 막막했던 기능들을 구현할 때는 누군가 한 명이 낸 아이디어를 구체화 하여 극복하는 경험은 저에게 새로운 경험과 지식을 쌓게 해주었으며, 앞으로도 최신 기술 트렌드 및 대표적인 기술 스택의 공부해야하는 필요성을 느낄 수 있었습니다.

항시 최종적으로 만들어낼 기능에 대해 다른길로 빠지지 않도록 서로 길잡이가 되었으며, 사용자를 우선시하는 태도로 개발을 진행하는 경험은 앞으로 혼자 개발을 하게 되더라도 우선해야할 개념을 상기시킬 수 있는 자산이 된 시간이었습니다.
</details>
