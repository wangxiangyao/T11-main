import Vue from "vue";
import {
  Button,
  Form,
  FormItem,
  Input,
  Carousel,
  CarouselItem,
  Pagination,
  Message
} from "element-ui";

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Pagination);

Vue.prototype.$message = Message;
