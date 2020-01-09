module.exports = {
  home: {
    router: {
      path: "/home",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "news" */ "../views/home.vue")
    },
    title: "首页"
  },
  news: {
    router: {
      path: "/news",
      name: "news",
      component: () =>
        import(/* webpackChunkName: "news" */ "../views/news/news.vue"),
      redirect: "/news/activity"
    },
    title: "新闻中心",
    redirect: "activity",
    children: {
      activity: {
        router: {
          path: "activity",
          name: "activity",
          component: () =>
            import(/* webpackChunkName: "news" */ "../views/news/activity.vue")
        },
        title: "活动新闻",
        to: "/news/activity",
        children: {
          activityById: {
            router: {
              path: ":id",
              name: "activityById"
            }
          }
        }
      },
      company: {
        router: {
          path: "company",
          name: "company",
          component: () =>
            import(/* webpackChunkName: "news" */ "../views/news/company.vue")
        },
        title: "公司新闻",
        to: "/news/company",
        children: {
          companyById: {
            router: {
              path: ":id",
              name: "companyById"
            }
          }
        }
      }
    }
  },
  download: {
    router: {
      path: "/download",
      name: "download",
      component: () =>
        import(/* webpackChunkName: "download" */ "../views/download.vue"),
      redirect: "/download/teacher"
    },
    title: "下载",
    redirect: "teacher",
    children: {
      teacher: {
        router: {
          path: "teacher",
          name: "teacher"
        },
        title: "老师端",
        to: "/download/teacher"
      },
      parents: {
        router: {
          path: "parents",
          name: "parents"
        },
        title: "家长端",
        to: "/download/teacher"
      }
    }
  },
  joinUs: {
    title: "招商入驻",
    redirect: "organization",
    router: {
      path: "/joinUs",
      name: "joinUs",
      component: () =>
        import(/* webpackChunkName: "JoinUs" */ "../views/joinUs/joinUs.vue"),
      redirect: "/joinUs/organization"
    },
    children: {
      organization: {
        router: {
          path: "organization",
          name: "organization",
          component: () =>
            import(
              /* webpackChunkName: "JoinUs" */ "../views/joinUs/organization.vue"
            )
        },
        title: "机构入驻",
        to: "/joinUs/organization"
      }
      // join: {
      //   router: {
      //     path: "join",
      //     name: "join",
      //     component: () => import(/* webpackChunkName: "JoinUs" */ "../views/joinUs/join.vue")
      //   },
      //   title: "公司加盟",
      //   to: "/joinUs/join"
      // }
    }
  },
  about: {
    router: {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "About" */ "../views/about/about.vue"),
      redirect: "/about/firm",
      scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          console.log(to);
          return {
            selector: to.hash
          };
        }
      }
    },
    title: "关于我们",
    redirect: "firm",
    children: {
      firm: {
        router: {
          path: "firm",
          name: "firm"
        },
        title: "公司介绍",
        to: "/about/firm",
        children: {
          more: {
            router: {
              path: "more",
              name: "companyMore"
            }
          }
        }
      },
      us: {
        router: {
          path: "us",
          name: "us"
        },
        title: "团队介绍",
        to: "/about/us"
      },
      events: {
        router: {
          path: "events",
          name: "events"
        },
        title: "大事记",
        to: "/about/events"
      }
    }
  }
};
