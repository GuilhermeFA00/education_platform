import page from "./page.js";

export default class extends page {
    constructor(params) {
        super(params);
        this.setTitle('Ingate-Educa');
    }

    async getHtml() {
        return `
        <div class="main-container-educa">
        <div class="page">
            <div>
                <div class="header-educa">
                    <div class="logo-container-educa">
                        <div>
                            <img class="logo-educa" src="https://ingate.app/img/logo.d9bfd2cf.png" alt="">
                        </div>
                        <span class="beta">beta</span>
                    </div>
                    <div class="search-container">
                        <div class="search-bar">
                            <div class="bar-container">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHZSURBVHgB3VVNVsIwEP4mxbUcoZ4APQF15VI9gXgAH7Bz4yPVAwDPA4g7drplZdm5E08gR8CdPqFxkgYptZTys9Hvvb4kzWS+mS+TBPjroKxJKZtFcgpVFSoPUPv8q2inBiAaIJz4UtaHKxNoxxBOA0rVeDjidsAEr6avIagERZ4hJOpkEVGKcxckHri7DxX63LZ48WhBIBW2bZiBCk/ZbpBJYCIn8WIiixYEWAIb0JNdc5DMRMxZa1kAlw0P8ziPCNgh20PLR85dcl7MRaI1Z1nSUs1Bcs46efKaZUsjYNRs28EaiDKmAMo5SycgUeYMgmVllwk16Zss9F7+ItDaQ/WxGYy0hcLObhpBEZvDlPN4/LWXRjDaAkkxTpQg4KNPTgmbwdPO41U4I5htkIt1QeKYy3VuH+MStTS7PWwrw7+5rcIUivHzA2faCYLeR7l89ElEl9y+9/u9Z+SEzboLUl3ZqLexIAP4fr0FhXsSoskR5cqEnXv2/gJC5SfnF13XLV5UjU6muYqDVMfgU0uqwsMhfy4HJhtXF/5SAutgehW7MGWnq8w44lvTPD7RfxW2OQDJ9lLbJ0kyXzRLdAJdfkSlWFhDlkNXy2P8rVhEslVoEum33/Bv8A3SJNI5yWhHNwAAAABJRU5ErkJggg=="
                                    alt="">
                            </div>
                            <div class="bar-text">
                                <input type="text" class="bar-input" placeholder="Search Everything">
                            </div>
                        </div>
                    </div>
                    <div class="icons-container">
                        <div class="icons-field">
                            <a href="" class="chat-icon">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJESURBVHgBtVXbddNAEJ2RKMBUgKggoQIrHdgdOAVArAKIViH/UoB/TAWkg5gKYipAdGC+faTh7mj1sBIlRj6Zc6TVGc3eO7vzInph4ecMjEkD8WjG5J+QUOB2bYWKn1zSrTFRPooAwCGxHxNJqAqRHNZ59Q0i5sBBrEmKCESbgwnM1ecUgEt8bknKG6wZALY9BwIscMKDExSw55n44/vkWQKAfwP4wgGbPvDAaY0SMa/M5YfzQYLk05dYytIAPAGwof+QDkkGkugBAQxOYXA/BryDkQHjAhhnwFhbndf8ZT/FOx8LXnOQjZsmRyWeYw40W7hM6AjReGnsJLy+/vqmIRChmVqUtKbjJbOv3W43bwiY/SmWTbdocKqJ1sKeh6oLerrTrs5lXc4+nzQECPUEx9hPR/bu8PwwV+miBtckgF4TotLNnN3d/iE4x20ELcGjwpbwsRqYdPRDNo1UBFL8aUvfiRRzBGxuLqNV5a0G8AzP2/oqNRUr3bt9WIET8lfdtK84TpcodbSH8vUhlfuUaDzY+42CjZIkylyQ6db9X9LxEnYxXR3YI6Mrogo1mMeIbRci6/oa2yBLYZubBQ9opNheVu2Xphd1syh066gY9BplMxvaZpfc3Fe1IOfVBKNtnUFPiV6p58c6P6T8DvBF93+XQJz33Rjk2p/QQvqj0QKz/+oCXi91D3oQbB4kSUOgqerzVEjsrF1BhfbNuFMOncnGFR9EAqpjhYDildTteZBgSNqhz1PM4onblcORX4cM/ReXf1PpJThcWj5zAAAAAElFTkSuQmCC"
                                    alt="">
                            </a>
                            <span class="icon-span">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBzVVLVsIwFH2JdV530CV0CbgC2AEy1wOdI6RH54A6F1eAS6grsK7AugK7gTbepCmWnv5A9HgHJKR5775/iH4ZrO2CEAsbS4/4SZ8kOfpQUkg8eRMzb/0jAigfEOOP2CqSmKSMIBFDzDVn+J/6TUS1BP7N/VymqYDSACb7QnhBibxnyB3GuZhfX/mdCSB8oYVluoLiCTV7ucTdMTwZVXnCK6UYn+M3alOeEag7LCDJF1XfeYVFPSwOrPeoK2SiwmMb2WYCrRywrNNX6o6oKNuJYDq9/KAjgNMRgDxEZus2EuimYnyYlea+QKIZ75vGrCZAt6rqcZC17gnOkSXaMTq+afONsf6TmFyL2WREB2DbEzI9Q9hibXPhexa/VD7R4Qh2dJUIYrPadERsCeBSqEnYyZgOgAmx6uaoOLesnVuqezGDhL96V1OSUtKkhTIsK3Uo89jVsVdJxkwq3mEVQgNjiUP7IYKBo/LUrR3XIHINiU31ZJFZQxPiv0eXJxNx5Ru4rx6dZ3Xm3z4MZZJMcHae13sdLGqHUqAqZCP8uwCVYEO5Cl/YpryTBzmyV44N1ZssSb74M29J/wFfGPmz31/EG2wAAAAASUVORK5CYII="
                                    alt="">
                            </span>
                        </div>
                    </div>
                    <div>
                        <div class="profile-container">
                            <div class="profile">
                                <span class="avatar">
                                    <!--The profile icon will be loaded in the JS file-->
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="page-content">
                    <div class="menu">
                        <div class="menu-wrapper">
                            <div class="menu-list-top">
                                <div class="menu-list-title">Meeting hub</div>
                                <div class="menu-items" id="hub-icon-container">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="GameIcon" data-v-4592cb8d=""
                                        data-v-7c11f7b7="">
                                        <path d="M8.84819 12.314V16.059" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" class="-white GameIcon__path"
                                            data-v-4592cb8d=""></path>
                                        <path d="M10.7591 14.1868H6.93799" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" class="-white GameIcon__path"
                                            data-v-4592cb8d=""></path>
                                        <path d="M15.3661 12.4281H15.259" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" class="-white GameIcon__path"
                                            data-v-4592cb8d=""></path>
                                        <path d="M17.1795 16.0025H17.0725" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" class="-white GameIcon__path"
                                            data-v-4592cb8d=""></path>
                                        <path
                                            d="M8.07227 2V2C8.07227 2.74048 8.68475 3.34076 9.44029 3.34076H10.4968C11.6624 3.34492 12.6065 4.27026 12.6118 5.41266V6.08771"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                            class="-white GameIcon__path" data-v-4592cb8d=""></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M16.4283 21.9626C13.4231 22.0135 10.473 22.0114 7.57275 21.9626C4.3535 21.9626 2 19.6664 2 16.5113V11.8617C2 8.70664 4.3535 6.41041 7.57275 6.41041C10.4889 6.36056 13.4411 6.3616 16.4283 6.41041C19.6476 6.41041 22 8.70767 22 11.8617V16.5113C22 19.6664 19.6476 21.9626 16.4283 21.9626Z"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                            class="-white GameIcon__path" data-v-4592cb8d=""></path>
                                    </svg>
                                    <span class="hub-span">
                                        Hub
                                    </span>
                                </div>
                                <div class="menu-items" id="chat-icon-container">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="chatIcon" data-v-7d4a8153=""
                                        data-v-1efbc9cf="">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M12.0568 2.0002C8.54687 1.98602 5.28557 3.80716 3.4605 6.80047C1.63543 9.79378 1.51292 13.5225 3.13757 16.6288L3.33789 17.0192C3.50209 17.3265 3.53644 17.6865 3.43329 18.0192C3.14742 18.7785 2.90849 19.5546 2.71784 20.343C2.71784 20.743 2.83231 20.9716 3.26158 20.9621C4.0219 20.7942 4.77068 20.5779 5.50332 20.3145C5.81886 20.2276 6.15437 20.2477 6.45725 20.3716C6.73389 20.5049 7.2967 20.8478 7.31578 20.8478C10.9915 22.7806 15.4808 22.2473 18.5998 19.5075C21.7187 16.7677 22.8199 12.3901 21.3676 8.50416C19.9153 4.61821 16.2111 2.03065 12.0568 2.0002V2.0002Z"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                            class="chatIcon__path" data-v-7d4a8153=""></path>
                                        <ellipse cx="7.28715" cy="12.0002" rx="0.476965" ry="0.47619"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                            class="chatIcon__path" data-v-7d4a8153=""></ellipse>
                                        <ellipse cx="12.0568" cy="12.0002" rx="0.476965" ry="0.47619"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                            class="chatIcon__path" data-v-7d4a8153=""></ellipse>
                                        <ellipse cx="16.8265" cy="12.0002" rx="0.476965" ry="0.47619"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                            class="chatIcon__path" data-v-7d4a8153=""></ellipse>
                                    </svg>
                                    <span class="chat-span">
                                        Chat
                                    </span>
                                </div>
                            </div>
                            <div class="menu-list-middle">
                                <div class="menu-list-title">Education</div>
                                <div class="menu-items" id="classes-icon-container">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="videoIcon classes-icon-container"
                                        data-v-04da6700="" data-v-1efbc9cf="">
                                        <path
                                            d="M17 9.6L18.8314 8.2814C20.1544 7.32887 22 8.27427 22 9.90447V14.0955C22 15.7257 20.1544 16.6711 18.8314 15.7186L17 14.4"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                            class="-white videoIcon__path" data-v-04da6700=""></path>
                                        <rect x="3" y="3" width="14" height="18" rx="4" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="-white videoIcon__path" data-v-04da6700=""></rect>
                                    </svg>
                                    <span class="classes-span">Your classes</span>
                                </div>
                                <div class="menu-items" id="explorer-icon-container">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" data-v-1efbc9cf=""
                                        class="explorer-icon-container">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M8.27002 14.9519L9.8627 9.8627L14.9519 8.27002L13.3593 13.3593L8.27002 14.9519Z"
                                            stroke="#808191" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <circle cx="11.611" cy="11.611" r="9.61098" stroke="#808191"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                        </circle>
                                    </svg>
                                    <span class="explorer-span">Explorer</span>
                                </div>
                            </div>
                            <div class="menu-list-bottom">
                                <div class="menu-items" id="settings-icon-container">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="settingIcon" data-v-ceda977e=""
                                        data-v-1efbc9cf="">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M20.8066 7.62357L20.1842 6.54348C19.6576 5.62956 18.4907 5.31427 17.5755 5.83867V5.83867C17.1399 6.0953 16.6201 6.16811 16.1307 6.04104C15.6413 5.91398 15.2226 5.59747 14.9668 5.16133C14.8023 4.8841 14.7139 4.56835 14.7105 4.24599V4.24599C14.7254 3.72918 14.5304 3.22836 14.17 2.85762C13.8096 2.48689 13.3145 2.27782 12.7975 2.27803H11.5435C11.0369 2.27802 10.5513 2.47987 10.194 2.8389C9.83666 3.19793 9.63714 3.68455 9.63958 4.19107V4.19107C9.62457 5.23688 8.77245 6.07677 7.72654 6.07666C7.40418 6.07331 7.08843 5.9849 6.8112 5.82036V5.82036C5.89603 5.29597 4.72908 5.61125 4.20251 6.52517L3.53432 7.62357C3.00838 8.53635 3.31937 9.70256 4.22997 10.2323V10.2323C4.82187 10.574 5.1865 11.2055 5.1865 11.889C5.1865 12.5725 4.82187 13.204 4.22997 13.5458V13.5458C3.32053 14.0719 3.0092 15.2353 3.53432 16.1453V16.1453L4.16589 17.2346C4.41262 17.6797 4.82657 18.0082 5.31616 18.1474C5.80575 18.2865 6.33061 18.2249 6.77459 17.976V17.976C7.21105 17.7213 7.73116 17.6515 8.21931 17.7822C8.70746 17.9128 9.12321 18.233 9.37413 18.6716C9.53867 18.9488 9.62708 19.2646 9.63043 19.587V19.587C9.63043 20.6435 10.4869 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9088 18.6 15.2681 18.2407C15.6274 17.8814 16.1154 17.6806 16.6236 17.6831C16.9451 17.6917 17.2596 17.7797 17.5389 17.9394V17.9394C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8066 16.1453C21.0617 15.7075 21.1317 15.186 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6717 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8873 19.1602 11.3658 19.4153 10.9279C19.5812 10.6383 19.8213 10.3982 20.111 10.2323V10.2323C21.0161 9.70285 21.3264 8.54345 20.8066 7.63272V7.63272V7.62357Z"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                            class="settingIcon__path" data-v-ceda977e=""></path>
                                        <circle cx="12.175" cy="11.889" r="2.63616" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" class="settingIcon__path"
                                            data-v-ceda977e=""></circle>
                                    </svg>
                                    <span class="settings-span">Settings</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="menu-content">
                        <div class="hub-container menu-contentIcon hub-icon-container">
                            <div class="hub-content">
                                <div class="channel-button-container">
                                    <div class="channel-button-field">
                                        <button class="ant-btn ant-btn-primary ant-btn-lg btn" width=""
                                            type="button" data-v-c9dd59e2="" data-v-6ee1475a="">
                                            <!----><span>Create channel</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chat-container menu-contentIcon chat-icon-container">
                            <div class="chat-content">
                                <div class="dm-list" data-v-7a6789e8="">
                                    <div data-v-7a6789e8="" style="margin: 16px 20px;">
                                        <div data-v-d5c5d0de="" data-v-7a6789e8=""><input placeholder="Search"
                                                type="text" class="ant-input input" data-v-d5c5d0de=""></div>
                                    </div>
                                    <div class="dm-recent" data-v-7a6789e8="">
                                        <div class="mt-10" data-v-7a6789e8="">
                                            <div class="pl-10" data-v-7a6789e8="">Recommendations</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="dm-chat" data-v-7a6789e8="">
                                    <div data-v-88318832="" data-v-7a6789e8=""
                                        style="width: 100%; height: 100%; padding: 16px 16px 0px;">
                                        <div class="chat-box" data-v-88318832="" style="height: 100%;"><img
                                                src="https://ingate.app/img/no_contents.6e02a87f.png" alt=""
                                                data-v-88318832="">
                                            <div data-v-88318832="" style="color: rgb(124, 121, 121);">Let's talk!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="classes-container menu-contentIcon classes-icon-container">
                            <div height="100%">
                                <div style="padding: 1.5rem;">
                                    <h1>Attending classes</h1>
                                    <div class="classes-user">
                                        <section class="classes">
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="explorer-container menu-contentIcon explorer-icon-container">
                            <div height="100%">
                                <div style="padding: 1.5rem;">
                                    <h1>Classes</h1>
                                    <section class="classes">
                                        <div class="cardsContainer">
                                            <div class="cards-list">
                                            <div class="m-5" data-v-109be1b2="" "style="scroll-snap-align: start;>
                                            <div class="ant-card ant-card-bordered ant-card-hoverable" ghost="" data-v-487be642="" data-v-109be1b2=""
                                                style="width: 255px; border-radius: 4px;">
                                                <!---->
                                                <div class="ant-card-cover"><img src="https://ingate.app/img/frontend.3d1f65ac.png" class="card-img" data-v-487be642="">
                                                    <div data-v-487be642="" style="display: flex; align-content: start;">
                                                        <div class="ant-progress ant-progress-line ant-progress-status-normal ant-progress-default"
                                                            data-v-487be642="">
                                                            <div>
                                                                <div class="ant-progress-outer">
                                                                    <div class="ant-progress-inner">
                                                                        <div class="ant-progress-bg"
                                                                            style="width: 0%; height: 8px; background: rgb(36, 203, 141); border-radius: 100px;">
                                                                        </div>
                                                                        <!---->
                                                                    </div>
                                                                </div>
                                                                <!---->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ant-card-body">
                                                    <div class="ant-card-meta" data-v-487be642="">
                                                        <!---->
                                                        <div class="ant-card-meta-detail">
                                                            <!---->
                                                            <div class="ant-card-meta-description">
                                                                <div data-v-487be642="" style="padding: 24px;">
                                                                    <div class="module-title" data-v-487be642="" style="color: white; font-size: 14px;">M??dulo 2 Fullstack</div>
                                                                    <div class="mt-5 cc-description" data-v-487be642="" style="height: 42px;">
                                                                        <p>M??dulo framework da 4a edi????o fullstack. Aqui voce j?? sabe um bocado, j??
                                                                            <code>pode</code> procurar algum servi??o na area de desenvolvedor frontend </p>
                                                                    </div>
                                                                    <div class="flex align-center mt-5 mb-10" data-v-487be642="">
                                                                        <div class="a" data-v-5d0e08a8="" data-v-487be642=""><span
                                                                                class="ant-avatar ant-avatar-circle ant-avatar-image" data-v-5d0e08a8=""
                                                                                style="width: 30px; height: 30px; line-height: 30px; font-size: 18px;"><img class="owner-img"
                                                                                    draggable="false"
                                                                                    src="https://lh3.googleusercontent.com/a-/AOh14GjVhByjmqxKkJzdphl_CNZ_iYFWPHAKLV0BqLiQlvA=s96-c"></span>
                                                                        </div>
                                                                        <div class="flex column ml-3" data-v-487be642=""><span class="owner-name" data-v-487be642=""
                                                                                style="font-size: 10px; color: white;">Yoannes Geissler</span><span
                                                                                data-v-487be642="" style="font-size: 8px;">Owner</span></div>
                                                                    </div>
                                                                    <div data-v-487be642=""
                                                                        style="padding-top: 24px; border-top: 1px solid rgba(216, 216, 216, 0.1);"><button
                                                                            class="ant-btn ant-btn-ghost ant-btn-lg btn" width="100%" type="button"
                                                                            data-v-c9dd59e2="" data-v-487be642=""
                                                                            style="border: 1px solid rgb(111, 110, 255); color: rgb(111, 110, 255); width: 100%;">
                                                                            <span class="enterBtn">Enter</span>
                                                                        </button></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!---->
                                            </div>
                                        </div>
                                            </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div class="settings-container menu-contentIcon settings-icon-container">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }

    notificationsAlert() {
        const icon = document.querySelector('.icon-span');
        const closeIcon = document.querySelector('.anticon-close');

        icon.addEventListener('click', () => {
            document.querySelector('.ant-drawer').classList.add('ant-drawer-open');
            document.body.style.overflow = "hidden";
            document.querySelector('.ant-drawer-content-wrapper').style.removeProperty("transform");
        });

        closeIcon.addEventListener('click', () => {
            document.querySelector('.ant-drawer').classList.remove('ant-drawer-open');
            document.body.style.removeProperty("overflow");
            document.querySelector('.ant-drawer-content-wrapper').style.transform = "translateX(100%)";
        });
    }

    menuItems_bgChange() {
        const menuOptions = document.querySelectorAll('.menu-items');
        const menuItems = document.querySelectorAll('.menu-contentIcon');

        addEventListener('DOMContentLoaded', () => {
            menuOptions[0].style.cssText += 'background-color:#6b69f9';
            menuItems[1].style.display = "none";
            menuItems[2].style.display = "none";
        });

        menuOptions.forEach((item) => {
            item.addEventListener('click', () => {
                showFilteredContent(item);
            })
        })

        function showFilteredContent(btn) {
            menuItems.forEach((item) => {
                if (item.classList.contains(btn.id)) {
                    resetActiveItem();
                    btn.style.cssText += 'background-color:#6b69f9';
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        }

        function resetActiveItem() {
            menuOptions.forEach((item) => {
                item.style.setProperty('background-color', 'initial');
            });
        }
    }

    joinClass() {
        const enterBtn = document.querySelector('.enterBtn');
        const classesUser = document.querySelector('.classes-user');

        allEvents();

        function allEvents() {
            window.addEventListener('DOMContentLoaded', () => {
                loadItems();
            });

            enterBtn.addEventListener('click', addClass());
        }

        function addClass() {
            const classItem = document.createElement('div');
            classItem.classList.add('classItem');

            classItem.innerHTML = `
            <div class="m-5" data - v - 109be1b2 = "" "style=" scroll - snap - align: start;>
                <div class=" ant-card="" ant-card-bordered="" ant-card-hoverable" = "" ghost = "" data - v - 487be642 = ""
                style = "width: 255px; border-radius: 4px;" >
            <div class="ant-card-cover"><img src="https://ingate.app/img/frontend.3d1f65ac.png" data-v-487be642="">
                <div data-v-487be642="" style="display: flex; align-content: start;">
                    <div class="ant-progress ant-progress-line ant-progress-status-normal ant-progress-default"
                        data-v-487be642="">
                        <div>
                            <div class="ant-progress-outer">
                                <div class="ant-progress-inner">
                                    <div class="ant-progress-bg"
                                        style="width: 0%; height: 8px; background: rgb(36, 203, 141); border-radius: 100px;">
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <!---->
                        </div>
                    </div>
                </div>
            </div>
            <div class="ant-card-body">
                <div class="ant-card-meta" data-v-487be642="">
                    <!---->
                    <div class="ant-card-meta-detail">
                        <!---->
                        <div class="ant-card-meta-description">
                            <div data-v-487be642="" style="padding: 24px;">
                                <div data-v-487be642="" style="color: white; font-size: 14px;">M??dulo 2 Fullstack</div>
                                <div class="mt-5 cc-description" data-v-487be642="" style="height: 42px;">
                                    <p>M??dulo framework da 4a edi????o fullstack. Aqui voce j?? sabe um bocado, j??
                                        <code>pode</code> procurar algum servi??o na area de desenvolvedor frontend
                                    </p>
                                </div>
                                <div class="flex align-center mt-5 mb-10" data-v-487be642="">
                                    <div class="a" data-v-5d0e08a8="" data-v-487be642=""><span
                                            class="ant-avatar ant-avatar-circle ant-avatar-image" data-v-5d0e08a8=""
                                            style="width: 30px; height: 30px; line-height: 30px; font-size: 18px;"><img
                                                draggable="false"
                                                src="https://lh3.googleusercontent.com/a-/AOh14GjVhByjmqxKkJzdphl_CNZ_iYFWPHAKLV0BqLiQlvA=s96-c"></span>
                                    </div>
                                    <div class="flex column ml-3" data-v-487be642=""><span data-v-487be642=""
                                            style="font-size: 10px; color: white;">Yoannes Geissler</span><span
                                            data-v-487be642="" style="font-size: 8px;">Owner</span></div>
                                </div>
                                <div data-v-487be642=""
                                    style="padding-top: 24px; border-top: 1px solid rgba(216, 216, 216, 0.1);"><button
                                        class="ant-btn ant-btn-ghost ant-btn-lg btn" width="100%" type="button"
                                        data-v-c9dd59e2="" data-v-487be642=""
                                        style="border: 1px solid rgb(111, 110, 255); color: rgb(111, 110, 255); width: 100%;">
                                        <!----><span class="enterBtn">Enter</span>
                                    </button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!---->
        </div >
            `
            classesUser.appendChild(classItem);
        }

        function getClassInfo(classProduct) {
            let classInfo = {
                imgSrc: classProduct.querySelector('.card-img').src,
                moduleTitle: classProduct.querySelector('.module-title').textContent,
                description: classProduct.querySelector('.cc-description').textContent,
                ownerImg: classProduct.querySelector('.owner-img').src,
                ownerName: classProduct.querySelector('.owner-name').textContent
            }
            addClass();
            saveProductInStrg();
        }

        function loadItems() {
            let products = getProductFromStrg();
            products.forEach(product => addClass(product));
        }

        function saveProductInStrg(item) {
            let products = getProductFromStrg();
            products.push(item);
            localStorage.setItem('products', JSON.stringify(products));
        }

        function getProductFromStrg() {
            return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];//If the key does not exist, an empty array will be added.
        }
    }

    enterClass() {
        const enterBtn = document.querySelector('.enterBtn');

        enterBtn.addEventListener('click', () => {
            window.location.href = '/card';
        });
    }

    /*classesCards() {
        cardsEvents();
        function cardsEvents() {
            window.addEventListener('DOMContentLoaded', () => {
                loadJSON();
            });
        }

        const cardList = document.querySelector('.cards-list');
        function loadJSON() {
            fetch('cards.json')
                .then(response => response.json()).then(data => {
                    let newHtml = '';
                    data.forEach(card => {
                        newHtml += `
            < div class="m-5" data - v - 109be1b2 = "" style = "scroll-snap-align: start;" >
                <div class="ant-card ant-card-bordered ant-card-hoverable" ghost="" data-v-487be642="" data-v-109be1b2=""
                    style="width: 255px; border-radius: 4px;">
                    <!---->
                    <div class="ant-card-cover"><img src="${card.backgroundImg}" data-v-487be642="">
                        <div data-v-487be642="" style="display: flex; align-content: start;">
                        <div class ="ant-progress ant-progress-line ant-progress-status-normal ant-progress-default"
                        data-v-487be642="">
                        <div>
                        <div class ="ant-progress-outer">
                        <div class ="ant-progress-inner">
                        <div class ="ant-progress-bg"
                        style="width: 0%; height: 8px; background: rgb(36, 203, 141); border-radius: 100px;">
                        </div>
                        <!---->
                        </div>
                        </div>
                        <!---->
                        </div>
                        </div>
                        </div>
                    </div>
                    <div class="ant-card-body">
                        <div class="ant-card-meta" data-v-487be642="">
                            <!---->
                            <div class="ant-card-meta-detail">
                                <!---->
                                <div class="ant-card-meta-description">
                                    <div data-v-487be642="" style="padding: 24px;">
                                        <div data-v-487be642="" style="color: white; font-size: 14px;">${card.courseName}</div>
                                        <div class="mt-5 cc-description" data-v-487be642="" style="height: 42px;">
                                            <p>${card.description}</p>
                                        </div>
                                        <div class="flex align-center mt-5 mb-10" data-v-487be642="">
                                            <div class="a" data-v-5d0e08a8="" data-v-487be642=""><span
                                                class="ant-avatar ant-avatar-circle ant-avatar-image" data-v-5d0e08a8=""
                                                style="width: 30px; height: 30px; line-height: 30px; font-size: 18px;"><img
                                                    draggable="false"
                                                    src="${card.ownerImg}"></span>
                                            </div>
                                            <div class="flex column ml-3" data-v-487be642=""><span data-v-487be642=""
                                                style="font-size: 10px; color: white;">${card.ownerName}</span><span
                                                    data-v-487be642="" style="font-size: 8px;">Owner</span></div>
                                        </div>
                                        <div data-v-487be642=""
                                            style="padding-top: 24px; border-top: 1px solid rgba(216, 216, 216, 0.1);"><button
                                                class="ant-btn ant-btn-ghost ant-btn-lg btn" width="100%" type="button"
                                                data-v-c9dd59e2="" data-v-487be642=""
                                                style="border: 1px solid rgb(111, 110, 255); color: rgb(111, 110, 255); width: 100%;">
                                                <!----><span>Enter</span>
                                            </button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!---->
                </div>
    </div >
            `;
                    })
                    cardList.innerHTML = newHtml;
                })
                .catch(error => {
                    alert(`User live server or local server`);
                    //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
                })
        }
    }*/
}