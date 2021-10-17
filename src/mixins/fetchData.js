export default function (defaultData = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultData
            }
        },
        async created() {
            //获取远程数据的方法
            this.data = await this.fetchData()
            this.isLoading = false
        }
    }
}
