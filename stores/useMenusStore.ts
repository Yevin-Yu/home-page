// stores/useMenusStore.ts
import { defineStore } from "pinia";
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

const menusaData = [
  {
    id: 1,
    name: "home-page",
    icon: "#icon-file",
    activeIcon: "#icon-file-open",
    type: 1,
    expand: true,
    child: [
      {
        id: 11,
        name: "个人主页",
        icon: "#icon-file",
        activeIcon: "#icon-file-open",
        type: 1,
        expand: true,
        child: [
          {
            id: 111,
            name: "home.html",
            icon: "#icon-html",
            type: 2,
            path: "/",
          },
          // {
          //   id: 112,
          //   name: "connect.html",
          //   icon: "#icon-html",
          //   type: 2,
          //   path: "/connect",
          // },
          // {
          //   id: 113,
          //   name: "cv.md",
          //   icon: "#icon-md",
          //   type: 2,
          //   path: "/cv",
          // },
        ],
      },
      {
        id: 14,
        name: "about.md",
        icon: "#icon-md",
        type: 2,
        path: "/about",
      },
    ],
  },
];

// menusStores 主方法
export const useMenusStore = defineStore("menus", () => {
  const route = useRoute();
  const router = useRouter();
  // 定义状态
  const menus = ref<NavItem[]>([]);
  const currentMenuId = ref(111);
  const tabList = ref<NavItem[]>([]);
  // 初始化数据
  menus.value = menusaData;

  // 设置当前菜单
  function setCurrentMenuId(id: number) {
    currentMenuId.value = id;
    setMenusaData();
  }
  // 关闭当前页签
  function closeCurrentTab(item: NavItem) {
    // 删除页签 如果是当前页签 跳转到最后一个
    tabList.value = tabList.value.filter((it) => it.id !== item.id);
    if (item.id === currentMenuId.value) {
      const last = tabList.value[tabList.value.length - 1];
      if (last && last.path) {
        currentMenuId.value = last.id;
        router.push(last.path); // 跳转到最后一个
      } else {
        router.push("/"); // 跳转默认主页
        setCurrentMenuId(111);
      }
    }
  }

  // 根据当前path同步 currentMenuId
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
