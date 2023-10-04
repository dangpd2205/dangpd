<template>
  <div class="content">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-row class="tac">
          <el-col>
            <div>
              <span>Storage</span>
              <el-progress :percentage="total()" />
            </div>
            <input v-model="keyword" type="text" @change="filteredItems()">
            <p>Folder</p>
            <el-menu
              :default-openeds="['0']"
              class="el-menu-vertical-demo"
            >
              <el-submenu v-for="menus, index1 in dataDemo" :key="menus.id" :index="String(index1)">
                <template slot="title">
                  <span>{{ menus.name }} ({{ menus?.children.length }})</span>
                </template>
                <el-menu-item-group v-if="menus?.children.length > 0">
                  <el-menu-item v-for="subMenu, index2 in menus.children" :key="subMenu.id" :index="String(index1) + '-' + String(index2)" @click="filterData(subMenu.children)">
                    {{ subMenu.name }} ({{ subMenu.children.length }})
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
            <p>Member</p>
            <div>
              <input v-model="check_all_member" type="checkbox">
              <span>All</span>
            </div>
            <div v-for="item, index in members" :key="index">
              <input v-model="filterMember" :value="item" type="checkbox">
              <span>{{ item }}</span>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="18">
        <table class="table">
          <thead valign="middle">
            <tr>
              <th>
                <td>
                  <input type="checkbox">
                </td>
              </th>
              <th>SelectAll</th>
              <th>Name</th>
              <th>Dimmension</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody v-cloak>
            <tr v-for="item in dataTable" :key="item.id">
              <td>
                <input v-model="arrSelected" :value="item.id" type="checkbox">
              </td>
              <td>
                <img :src="item.url" alt="">
              </td>
              <td>{{ item.name || '' }}</td>
              <td>{{ item.dimmension || "" }}</td>
              <td>{{ formatSizeFile(item.size) }}</td>
            </tr>
          </tbody>
        </table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  fetch () {
    this.extractChildren(this.dataDemo);
  },
  data () {
    return {
      dataAll: [],
      check_all_member: true,
      dataDemo: [
        {
          id: 1,
          name: 'Uploads',
          children: [
            {
              id: 10,
              name: 'Images',
              children: [
                {
                  id: 101,
                  name: 'Seasandiego.jpg',
                  url: 'https://assets.site-static.com/userFiles/2597/image/2023/CARDIFF_BY_THE_SEA/5-23-2023_1__reasons-why-cardiff-by-the-sea-san-diego-great-place-to-live/9_Reasons_Why_Cardiff-by-the-Sea_San_Diego_.jpg',
                  type: 'image/jpg',
                  dimmension: '2000x2000',
                  size: '763300',
                  photo_by: 'Admin'
                },
                {
                  id: 102,
                  name: 'iMactwin.png',
                  url: 'https://i.insider.com/60e4cb0d22d19400191c957c?width=1000&format=jpeg&auto=webp',
                  type: 'image/png',
                  dimmension: '2000x2000',
                  size: '640200',
                  photo_by: 'Apple'
                },
                {
                  id: 103,
                  name: 'hustlecup.jpg',
                  url: 'https://images.deliveryhero.io/image/fd-ph/LH/kmph-hero.jpg',
                  type: 'image/jpg',
                  dimmension: '2000x2000',
                  size: '100400',
                  photo_by: 'Admin'
                },
                {
                  id: 104,
                  name: 'MS-Surface.jpg',
                  url: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OXzi?ver=3a58',
                  type: 'image/jpg',
                  dimmension: '2000x2000',
                  size: '113200',
                  photo_by: 'Admin'
                },
                {
                  id: 105,
                  name: 'Famoustower.jpg',
                  url: 'https://www.worldfamousthings.com/wp-content/uploads/2018/01/Leaning-Tower-of-Pisa-Italy.jpg',
                  type: 'image/jpg',
                  dimmension: '2000x2000',
                  size: '763300',
                  photo_by: 'Admin'
                }
              ]
            },
            {
              id: 20,
              name: 'Document',
              children: []
            },
            {
              id: 30,
              name: 'Videos',
              children: [
                {
                  id: 301,
                  name: 'GODZILLA MINUS ONE Official Trailer',
                  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019',
                  type: 'video/mp4',
                  dimmension: '2000x2000',
                  size: '763300',
                  photo_by: 'Admin'
                },
                {
                  id: 302,
                  name: 'Marvel Studios’ Loki Season 2 | October 6 on Disney+',
                  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019',
                  type: 'video/mp4',
                  dimmension: '2000x2000',
                  size: '763300',
                  photo_by: 'Admin'
                },
                {
                  id: 303,
                  name: 'THE BOY AND THE HERON | Official Teaser Trailer',
                  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019',
                  type: 'video/mp4',
                  dimmension: '2000x2000',
                  size: '763300',
                  photo_by: 'Admin'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: 'Sources',
          children: []
        },
        {
          id: 3,
          name: 'Shared',
          children: []
        }
      ],
      arrSelected: [],
      members: [],
      filterMember: [],
      keyword: ''
    };
  },
  computed: {
    dataTable () {
      if (this.filterMember.length === 0 && this.check_all_member) {
        return this.dataAll;
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.check_all_member = false;
        return this.dataAll.filter(item => this.filterMember.includes(item.photo_by));
      }
    }
  },
  methods: {
    filterData (data) {
      this.dataAll = data;
    },
    extractChildren (arr) {
      for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item.children && item.children.length > 0) {
          this.extractChildren(item.children);
        } else if (!('children' in item)) {
          this.dataAll.push(item);
          if (!this.members.includes(item.photo_by)) {
            this.members.push(item.photo_by);
          }
        }
      }
    },
    formatSizeFile (fileSize) {
      if (fileSize < 1024) {
        return fileSize + ' B';
      } else if (fileSize < 1024 * 1024) {
        return (fileSize / 1024).toFixed(1) + ' KB';
      } else if (fileSize < 1024 * 1024 * 1024) {
        return (fileSize / (1024 * 1024)).toFixed(1) + ' MB';
      } else {
        return (fileSize / (1024 * 1024 * 1024)).toFixed(1) + ' GB';
      }
    },
    total () {
      const dataUse = this.dataTable.reduce((accumulator, item) => Number(accumulator) + Number(item.size), 0);
      return Number(dataUse * 100 / 1073741824).toFixed(1);
    },
    filteredItems () {
      return this.dataAll.filter((item) => {
        for (const key in item) {
          // eslint-disable-next-line no-prototype-builtins
          if (item.hasOwnProperty(key)) {
            const field = item[key];
            if (typeof field === 'string' && field.toLowerCase().includes(this.keyword.toLowerCase())) {
              return true;
            }
          }
        }
        return false;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
input {
  display: block;
}
.tac {
  background: #fff;
}
.content {
  width: 1200px;
  margin: 100px auto;
}
.table {
  th {
    height: 30px;
    vertical-align: middle;
  }
  width: 100%;
  background: #fff;
  tr {
    text-align: left;
    padding: 10px;
    td {
      vertical-align: middle;
      padding: 10px;
      img {
        height: 100px;
        width: 250px;
      };
    }
  }
}
.m-w-20 {
  min-width: 20px;
}
</style>
