import global from "@/blog.config.json"

export default ({ app }, inject) => {
  inject('global', global)
}