import { ref, watch } from '@vue/composition-api'

export default function useAutoSuggest(props) {
  const filteredData = ref({})

  /**
   * Filter group against provided query
   * Grp Structure:
   * {
   *    key: 'title',
   *    data: [
   *      title: 'Admin', img: 'someImage.png',
   *      title: 'Template', img: 'otherImage.png',
   *    ]
   * }
   * @param {Object} grp Group object to perform filter on
   * @param {String} query Query string to filter
   */
  const filterGrp = (grp, query) => {
    const exactEle = grp.data.filter(item => item[grp.key].toLowerCase().startsWith(query.toLowerCase()))
    const containEle = grp.data.filter(
      // prettier-ignore
      item => !item[grp.key].toLowerCase().startsWith(query.toLowerCase()) && item[grp.key].toLowerCase().indexOf(query.toLowerCase()) > -1,
    )
    return exactEle.concat(containEle).slice(0, props.searchLimit)
  }

  const searchQuery = ref('')
  const resetsearchQuery = () => {
    searchQuery.value = ''
  }

  const handleSearchQueryUpdate = val => {
    if (val === '') {
      filteredData.value = {}
    } else {
      const queriedData = {}
      const dataGrps = Object.keys(props.data)

      dataGrps.forEach((grp, i) => {
        queriedData[dataGrps[i]] = filterGrp(props.data[grp], val)
      })

      filteredData.value = queriedData
    }
  }

  watch(searchQuery, val => handleSearchQueryUpdate(val))

  return {
    searchQuery,
    resetsearchQuery,
    filteredData,
  }
}
