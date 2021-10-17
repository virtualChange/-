//事件总线 混合 监听 触发
export default function (ref) {
    return {
        methods: {
            setMainScroll(scrollTop) {
                this.$refs[ref].scrollTop = scrollTop;
            },
            handleScroll() {
                this.$Bus.$emit("mainScroll", this.$refs[ref]);
            },
        },
       
        mounted() {
            this.$Bus.$on("setMainScroll", this.setMainScroll);
            this.$refs[ref].addEventListener("scroll", this.handleScroll);
        },
        beforeDestroy() {
            this.$Bus.$off("setMainScroll", this.setMainScroll);
            this.$Bus.$emit("mainScroll");
            this.$refs[ref].removeEventListener("scroll", this.handleScroll);
        }
    }
}