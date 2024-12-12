<template>
    <div class="home">
        <div class="content">
            <div class="left">
                <img src="/logo.png" alt="logo" />
                <h1>耶温-Yevin</h1>
                <p>Web前端开发</p>
                <p>让每一次点击都充满惊喜！</p>
                <p>认真生活，简单做人，用心做事。</p>
                <div class="kill">
                    <svg class="icon">
                        <use xlink:href="#icon-html5"></use>
                    </svg>
                    <svg class="icon">
                        <use xlink:href="#icon-css3"></use>
                    </svg>
                    <svg class="icon">
                        <use xlink:href="#icon-js"></use>
                    </svg>
                    <svg class="icon">
                        <use xlink:href="#icon-ts"></use>
                    </svg>
                    <svg class="icon">
                        <use xlink:href="#icon-vue"></use>
                    </svg>
                    <svg class="icon">
                        <use xlink:href="#icon-nuxt"></use>
                    </svg>
                    <svg class="icon">
                        <use xlink:href="#icon-react"></use>
                    </svg>
                    <svg class="icon">
                        <use xlink:href="#icon-vite"></use>
                    </svg>
                    <svg class="icon">
                        <use xlink:href="#icon-webpack"></use>
                    </svg>
                    <svg class="icon">
                        <use xlink:href="#icon-node"></use>
                    </svg>
                    <svg class="icon">
                        <use xlink:href="#icon-nest"></use>
                    </svg>
                    <svg class="icon">
                        <use xlink:href="#icon-git"></use>
                    </svg>
                    <svg class="icon">
                        <use xlink:href="#icon-gitlab"></use>
                    </svg>
                    <svg class="icon">
                        <use xlink:href="#icon-jenkins"></use>
                    </svg>
                    <svg class="icon">
                        <use xlink:href="#icon-mysql"></use>
                    </svg>
                    <svg class="icon">
                        <use xlink:href="#icon-nginx"></use>
                    </svg>
                </div>
            </div>
            <div class="right">
                <div class="card-item">
                    <div class="title"></div>
                </div>
                <div class="card-item"></div>
                <div class="card-item"></div>
                <div class="card-item"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.home {
    padding: 0.5rem 2rem;
    position: relative;
    .content {
        display: flex;
        border-radius: 1rem;
        width: 90%;
        padding: 1rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        .left {
            text-align: center;
            width: 40%;
            font-size: 0.8rem;
            color: var(--font-color-2);
            h1 {
                font-weight: normal;
            }
            img {
                width: 10rem;
                height: 10rem;
            }
            .kill {
                padding: 1rem 3rem;
            }
            .kill .icon {
                padding: 0.2rem;
                width: 1.5rem;
                height: 1.5rem;
            }
        }
        .right {
            width: 60%;
            .card-item {
                display: inline-block;
                margin: 0.5rem;
                width: calc( 50% - 1.25rem );
                height: 8rem;
                border-radius: 0.5rem;
                padding: 0.5rem;
                box-sizing: border-box;
                box-shadow:
                  5px 5px 15px rgba(0,0,0,0.1),
                  -5px -5px 15px rgba(255,255,255,0.3);
            }
        }
    }
}
</style>
