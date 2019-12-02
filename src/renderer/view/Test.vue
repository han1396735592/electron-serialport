<template>
    <div>
        <a-card border="0" title="串口控制台">
            <a-row>
                <a-col :span="8">

                    <a-form>
                        <a-form-item label="串口">
                            <a-select style="width: 100%">
                                <a-select-option v-for="item in serialPortList" :key="item.path">
                                    {{item.path}}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                        <a-form-item label="波特率">
                            <a-select style="width: 100%">
                                <a-select-option v-for="item in serialPortList" :key="item.path">
                                    {{item.path}}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                        <a-form-item label="数据位">
                            <a-select style="width: 100%">
                                <a-select-option v-for="item in serialPortList" :key="item.path">
                                    {{item.path}}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                        <a-form-item label="停止位">
                            <a-select style="width: 100%">
                                <a-select-option v-for="item in serialPortList" :key="item.path">
                                    {{item.path}}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                        <a-form-item label="校验位">
                            <a-select style="width: 100%">
                                <a-select-option v-for="item in serialPortList" :key="item.path">
                                    {{item.path}}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                        <a-form-item label="流控制">
                            <a-select style="width: 100%">
                                <a-select-option v-for="item in serialPortList" :key="item.path">
                                    {{item.path}}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-form>


                </a-col>
                <a-col offset="2" :span="10">
                    <div class="title">操作</div>
                    <div class="">
                        <a-button type="primary">打开</a-button>
                        <a-button type="primary">关闭</a-button>
                    </div>
                    <a-form>
                        <a-form-item label="接受数据">
                            <a-textarea rows="5"></a-textarea>
                            <a-button type="primary">清除</a-button>

                            <a-switch style="margin-left: 20px" checkedChildren="ASCII" unCheckedChildren="HEX"  defaultChecked />
                        </a-form-item>
                        <a-form-item label="发送数据">
                            <a-textarea rows="5"></a-textarea>
                            <a-button type="primary">发送</a-button>
                            <a-switch style="margin-left: 20px" checkedChildren="ASCII" unCheckedChildren="HEX"  defaultChecked />
                        </a-form-item>
                    </a-form>
                </a-col>
            </a-row>
        </a-card>
    </div>
</template>

<script>
  import serialport from 'serialport'

  export default {
    name: 'Test',

    data () {
      return {
        serialPortList: []
      }
    },
    beforeMount () {
      const that = this
      serialport.list().then(res => {
        that.serialPortList = res
      })
    }
  }
</script>

<style scoped>

</style>
