# hv-dialog
Mobile confirmDialog &amp; toast plugins
# start
npm i hv-dialog
<br/>
import hvDialog from 'hv-dialog'
<br/>
Vue.use(hvDialog)
# use in dom
<pre>
this.$toast(
    {
        content: "hello world！",
        type: "success"
    }
);
this.$dialog(
    {
        content: "are you sure？",
        confirmButtonText: "yes",
        cancelButtonText: "no",
        confirm: () => {
            // do someting
        },
        cancel: () => {
            // do someting
        }
    }
)
</pre>
# options
<h2>toast</h2>
<table style="text-align:center">
    <tr>
        <th>option</th>
        <th>type</th>
        <th>value</th>
        <th>default</th>
    </tr>
    <tr>
        <td>content</td>
        <td>String </td>
        <td>""</td>
        <td>""</td>
    </tr>
    <tr>
        <td>type</td>
        <td>String </td>
        <td>""/infor/success/warning/error</td>
        <td>""</td>
    </tr>
    <tr>
        <td>position</td>
        <td>String </td>
        <td>top/center/bottom</td>
        <td>"top"</td>
    </tr>
    <tr>
        <td>duration</td>
        <td>String </td>
        <td></td>
        <td>"2333"</td>
    </tr>
</table>
<br/>
<h2>dialog</h2>
<table style="text-align:center">
    <tr>
        <th>option</th>
        <th>type</th>
        <th>value</th>
        <th>default</th>
    </tr>
    <tr>
        <td>content</td>
        <td>String </td>
        <td>""</td>
        <td>""</td>
    </tr>
    <tr>
        <td>type</td>
        <td>String </td>
        <td>""/success/warning/error</td>
        <td>""</td>
    </tr>
    <tr>
        <td>confirmButtonText</td>
        <td>String </td>
        <td>""</td>
        <td>"确认"</td>
    </tr>
    <tr>
        <td>cancelButtonText</td>
        <td>String </td>
        <td>""</td>
        <td>"取消"</td>
    </tr>
    <tr>
        <td>confirm</td>
        <td>Function</td>
        <td></td>
        <td>null</td>
    </tr>
    <tr>
        <td>cancel</td>
        <td>Function</td>
        <td></td>
        <td>null</td>
    </tr>
</table>
