// stores/useMenusStore.ts
import { defineStore, type Store } from "pinia";
import { useRoute } from "vue-router";

interface NavItem {
  id: number;
  name: string;
  icon: string;
  activeIcon?: string;
  type: number;
  expand?: boolean;
  child?: NavItem[];
  path?: string;
}

// menusStores 主方法
export const useMenusStore = defineStore("menus", () => {
  // 定义状态
  const menus = ref<NavItem[]>([]);
  const currentMenuId = ref(111);
  let tabList = ref<NavItem[]>([]);
  menus.value = [
    {
      id: 1,
      name: "home-page",
      icon: "/image/svg/file.svg",
      activeIcon: "/image/svg/file-open.svg",
      type: 1,
      expand: true,
      child: [
        {
          id: 11,
          name: "个人主页",
          icon: "/image/svg/file.svg",
          activeIcon: "/image/svg/file-open.svg",
          type: 1,
          expand: true,
          child: [
            {
              id: 111,
              name: "home.html",
              icon: "/image/svg/html.svg",
              type: 2,
              path: "/",
            },
            {
              id: 112,
              name: "connect.html",
              icon: "/image/svg/html.svg",
              type: 2,
              path: "/connect",
            },
            {
              id: 113,
              name: "cv.md",
              icon: "/image/svg/md.svg",
              type: 2,
              path: "/cv",
            },
          ],
        },
        // {
        //   id: 12,
        //   name: "开源项目",
        //   icon: "/image/svg/file.svg",
        //   activeIcon: "/image/svg/file-open.svg",
        //   type: 1,
        //   expand: true,
        //   child: [
        //     {
        //       id: 121,
        //       name: "耶温博客.md",
        //       icon: "/image/svg/md.svg",
        //       type: 2,
        //       path: "boke",
        //     },
        //     {
        //       id: 122,
        //       name: "导航起始页.md",
        //       icon: "/image/svg/md.svg",
        //       type: 2,
        //       path: "nav",
        //     },
        //     {
        //       id: 123,
        //       name: "Web Chat.md",
        //       icon: "/image/svg/md.svg",
        //       type: 2,
        //       path: "chat",
        //     },
        //     {
        //       id: 122,
        //       name: "统计插件.md",
        //       icon: "/image/svg/md.svg",
        //       type: 2,
        //       path: "tongji",
        //     },
        //   ],
        // },
        // {
        //   id: 13,
        //   name: "网站链接",
        //   icon: "/image/svg/file.svg",
        //   activeIcon: "/image/svg/file-open.svg",
        //   type: 1,
        //   expand: true,
        //   child: [
        //     {
        //       id: 131,
        //       name: "前端相关.md",
        //       icon: "/image/svg/link.svg",
        //       type: 2,
        //       path: "frontend",
        //     },
        //     {
        //       id: 132,
        //       name: "学习网站.md",
        //       icon: "/image/svg/link.svg",
        //       type: 2,
        //       path: "learning",
        //     },
        //     {
        //       id: 133,
        //       name: "资源网站.md",
        //       icon: "/image/svg/link.svg",
        //       type: 2,
        //       path: "resource",
        //     },
        //   ],
        // },
        {
          id: 14,
          name: "About.md",
          icon: "/image/svg/md.svg",
          type: 2,
          path: "/about",
        },
      ],
    },
  ];

  // 根据 当前path 同步 currentMenuId
  const route = useRoute();
  function syncCurrentMenuId() {
    const path = route.path;
    let data = findValueById(menus.value, "path", path);
    if (data) currentMenuId.value = data.id;
  }
  // 同步 tabList
  function setMenusaData() {
    let data = findValueById(menus.value, "id", currentMenuId.value);
    let item = tabList.value.find((it) => it.id === currentMenuId.value);
    if (item) {
      return;
    } else if (data) {
      tabList.value.push(data);
    }
  }
  // 修改状态
  function setCurrentMenuId(id: number) {
    currentMenuId.value = id;
    setMenusaData();
  }
  // 关闭当前页签
  const router = useRouter();
  function closeCurrentTab(item: NavItem) {
    console.log("closeCurrentTab");
    // 删除页签 如果是当前页签 跳转到最后一个
    tabList.value = tabList.value.filter((it) => it.id !== item.id);
    if (item.id === currentMenuId.value) {
      const last = tabList.value[tabList.value.length - 1];
      if (last && last.path) {
        currentMenuId.value = last.id;
        router.push(last.path);
      } else {
        // 跳转默认主页
        router.push("/");
        setCurrentMenuId(111);
      }
    }
  }

  // 首次加载同步currentMenuId
  syncCurrentMenuId();
  // 同步tablist
  setMenusaData();

  return {
    menus,
    tabList,
    currentMenuId,
    setCurrentMenuId,
    closeCurrentTab,
  };
});

// 查询方法
function findValueById<T extends object>(
  obj: T | Array<T>,
  key: string,
  value: any,
): T | null {
  if (obj == null) {
    // 简化空检查
    return null;
  }

  if (Array.isArray(obj)) {
    for (const item of obj) {
      const result = findValueById(item, key, value);
      if (result !== null) {
        return result;
      }
    }
    return null;
  }

  if (typeof obj === "object" && !Array.isArray(obj)) {
    if (obj.hasOwnProperty(key) && obj[key as keyof T] === value) {
      return obj;
    }

    for (const val of Object.values(obj)) {
      const result = findValueById(val, key, value);
      if (result !== null) {
        return result;
      }
    }
  }

  return null;
}
