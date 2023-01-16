/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        // minify에 대한 옵셔널
        swcMinifyDebugOptions: {
            compress: {
                default: true,
                side_effects: false,
            },
        },
    },
    swcMinify: true, // 공백, 주석삭제, 스크립트암호화 (더 로딩속도빠르게해주는 효과, babel 대신 17배나 빠르다. )
    compiler: {
      styledComponents: true,
    }
};

// phase: 설정이 세팅되는 환경 (배포용인지, 개발용인지)
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            /* development only config options here */
            nextConfig,
            env: {
                // 개발용 환경변수
                EXMAPLE_KEY: "example-key",
            },
            /* basePath: '/docs', //도메인의 하위 경로 아래에 Next.js 애플리케이션을 배포하려면 basePath구성 옵션을 사용할 수 있습니다. */ 

        };
    }
    return {
        /* config options for all phases except development here */
        nextConfig,
    };
};
