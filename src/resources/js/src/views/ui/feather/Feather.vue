<template>
  <section id="feather-icons">
    <div class="icon-search-wrapper my-3 mx-auto">
      <b-form-group>
        <b-input-group class="input-group-merge">
          <b-input-group-prepend is-text>
            <feather-icon icon="SearchIcon" />
          </b-input-group-prepend>
          <b-form-input
            id="icons-search"
            v-model="seachQuery"
            placeholder="Search Icons..."
          />
        </b-input-group>
      </b-form-group>
    </div>
    <div
      id="icons-container"
      class="d-flex flex-wrap"
    >
      <b-card
        v-for="icon in filterIcons"
        :key="icon"
        v-b-tooltip.hover.top="icon"
        class="icon-card cursor-pointer text-center mb-2 mx-50"
        @click="copyIconName(icon)"
      >
        <div class="icon-wrapper">
          <feather-icon
            :icon="icon"
            size="24"
          />
        </div>
        <b-card-text class="icon-name text-truncate mb-0 mt-1">
          {{ icon }}
        </b-card-text>
      </b-card>
    </div>
  </section>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { BFormGroup, BInputGroup, BInputGroupPrepend, BFormInput, BCard, BCardText, VBTooltip } from 'bootstrap-vue'
import { useClipboard } from '@vueuse/core'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { useToast } from 'vue-toastification/composition'

export default {
  components: {
    BCard,
    BFormInput,
    BFormGroup,
    BInputGroup,
    BCardText,
    BInputGroupPrepend,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  data() {
    return {
      seachQuery: '',
      icons: [
        'ActivityIcon',
        'AirplayIcon',
        'AlertCircleIcon',
        'AlertOctagonIcon',
        'AlertTriangleIcon',
        'AlignCenterIcon',
        'AlignJustifyIcon',
        'AlignLeftIcon',
        'AlignRightIcon',
        'AnchorIcon',
        'ApertureIcon',
        'ArchiveIcon',
        'ArrowDownCircleIcon',
        'ArrowDownLeftIcon',
        'ArrowDownRightIcon',
        'ArrowDownIcon',
        'ArrowLeftCircleIcon',
        'ArrowLeftIcon',
        'ArrowRightCircleIcon',
        'ArrowRightIcon',
        'ArrowUpCircleIcon',
        'ArrowUpLeftIcon',
        'ArrowUpRightIcon',
        'ArrowUpIcon',
        'AtSignIcon',
        'AwardIcon',
        'BarChart2Icon',
        'BarChartIcon',
        'BatteryChargingIcon',
        'BatteryIcon',
        'BellOffIcon',
        'BellIcon',
        'BluetoothIcon',
        'BoldIcon',
        'BookOpenIcon',
        'BookIcon',
        'BookmarkIcon',
        'BoxIcon',
        'BriefcaseIcon',
        'CalendarIcon',
        'CameraOffIcon',
        'CameraIcon',
        'CastIcon',
        'CheckCircleIcon',
        'CheckSquareIcon',
        'CheckIcon',
        'ChevronDownIcon',
        'ChevronLeftIcon',
        'ChevronRightIcon',
        'ChevronUpIcon',
        'ChevronsDownIcon',
        'ChevronsLeftIcon',
        'ChevronsRightIcon',
        'ChevronsUpIcon',
        'ChromeIcon',
        'CircleIcon',
        'ClipboardIcon',
        'ClockIcon',
        'CloudDrizzleIcon',
        'CloudLightningIcon',
        'CloudOffIcon',
        'CloudRainIcon',
        'CloudSnowIcon',
        'CloudIcon',
        'CodeIcon',
        'CodepenIcon',
        'CodesandboxIcon',
        'CoffeeIcon',
        'ColumnsIcon',
        'CommandIcon',
        'CompassIcon',
        'CopyIcon',
        'CornerDownLeftIcon',
        'CornerDownRightIcon',
        'CornerLeftDownIcon',
        'CornerLeftUpIcon',
        'CornerRightDownIcon',
        'CornerRightUpIcon',
        'CornerUpLeftIcon',
        'CornerUpRightIcon',
        'CpuIcon',
        'CreditCardIcon',
        'CropIcon',
        'CrosshairIcon',
        'DatabaseIcon',
        'DeleteIcon',
        'DiscIcon',
        'DivideCircleIcon',
        'DivideSquareIcon',
        'DivideIcon',
        'DollarSignIcon',
        'DownloadCloudIcon',
        'DownloadIcon',
        'DribbbleIcon',
        'DropletIcon',
        'Edit2Icon',
        'Edit3Icon',
        'EditIcon',
        'ExternalLinkIcon',
        'EyeOffIcon',
        'EyeIcon',
        'FacebookIcon',
        'FastForwardIcon',
        'FeatherIcon',
        'FigmaIcon',
        'FileMinusIcon',
        'FilePlusIcon',
        'FileTextIcon',
        'FileIcon',
        'FilmIcon',
        'FilterIcon',
        'FlagIcon',
        'FolderMinusIcon',
        'FolderPlusIcon',
        'FolderIcon',
        'FramerIcon',
        'FrownIcon',
        'GiftIcon',
        'GitBranchIcon',
        'GitCommitIcon',
        'GitMergeIcon',
        'GitPullRequestIcon',
        'GithubIcon',
        'GitlabIcon',
        'GlobeIcon',
        'GridIcon',
        'HardDriveIcon',
        'HashIcon',
        'HeadphonesIcon',
        'HeartIcon',
        'HelpCircleIcon',
        'HexagonIcon',
        'HomeIcon',
        'ImageIcon',
        'InboxIcon',
        'InfoIcon',
        'InstagramIcon',
        'ItalicIcon',
        'KeyIcon',
        'LayersIcon',
        'LayoutIcon',
        'LifeBuoyIcon',
        'Link2Icon',
        'LinkIcon',
        'LinkedinIcon',
        'ListIcon',
        'LoaderIcon',
        'LockIcon',
        'LogInIcon',
        'LogOutIcon',
        'MailIcon',
        'MapPinIcon',
        'MapIcon',
        'Maximize2Icon',
        'MaximizeIcon',
        'MehIcon',
        'MenuIcon',
        'MessageCircleIcon',
        'MessageSquareIcon',
        'MicOffIcon',
        'MicIcon',
        'Minimize2Icon',
        'MinimizeIcon',
        'MinusCircleIcon',
        'MinusSquareIcon',
        'MinusIcon',
        'MonitorIcon',
        'MoonIcon',
        'MoreHorizontalIcon',
        'MoreVerticalIcon',
        'MousePointerIcon',
        'MoveIcon',
        'MusicIcon',
        'Navigation2Icon',
        'NavigationIcon',
        'OctagonIcon',
        'PackageIcon',
        'PaperclipIcon',
        'PauseCircleIcon',
        'PauseIcon',
        'PenToolIcon',
        'PercentIcon',
        'PhoneCallIcon',
        'PhoneForwardedIcon',
        'PhoneIncomingIcon',
        'PhoneMissedIcon',
        'PhoneOffIcon',
        'PhoneOutgoingIcon',
        'PhoneIcon',
        'PieChartIcon',
        'PlayCircleIcon',
        'PlayIcon',
        'PlusCircleIcon',
        'PlusSquareIcon',
        'PlusIcon',
        'PocketIcon',
        'PowerIcon',
        'PrinterIcon',
        'RadioIcon',
        'RefreshCcwIcon',
        'RefreshCwIcon',
        'RepeatIcon',
        'RewindIcon',
        'RotateCcwIcon',
        'RotateCwIcon',
        'RssIcon',
        'SaveIcon',
        'ScissorsIcon',
        'SearchIcon',
        'SendIcon',
        'ServerIcon',
        'SettingsIcon',
        'Share2Icon',
        'ShareIcon',
        'ShieldOffIcon',
        'ShieldIcon',
        'ShoppingBagIcon',
        'ShoppingCartIcon',
        'ShuffleIcon',
        'SidebarIcon',
        'SkipBackIcon',
        'SkipForwardIcon',
        'SlackIcon',
        'SlashIcon',
        'SlidersIcon',
        'SmartphoneIcon',
        'SmileIcon',
        'SpeakerIcon',
        'SquareIcon',
        'StarIcon',
        'StopCircleIcon',
        'SunIcon',
        'SunriseIcon',
        'SunsetIcon',
        'TabletIcon',
        'TagIcon',
        'TargetIcon',
        'TerminalIcon',
        'ThermometerIcon',
        'ThumbsDownIcon',
        'ThumbsUpIcon',
        'ToggleLeftIcon',
        'ToggleRightIcon',
        'ToolIcon',
        'Trash2Icon',
        'TrashIcon',
        'TrelloIcon',
        'TrendingDownIcon',
        'TrendingUpIcon',
        'TriangleIcon',
        'TruckIcon',
        'TvIcon',
        'TwitchIcon',
        'TwitterIcon',
        'TypeIcon',
        'UmbrellaIcon',
        'UnderlineIcon',
        'UnlockIcon',
        'UploadCloudIcon',
        'UploadIcon',
        'UserCheckIcon',
        'UserMinusIcon',
        'UserPlusIcon',
        'UserXIcon',
        'UserIcon',
        'UsersIcon',
        'VideoOffIcon',
        'VideoIcon',
        'VoicemailIcon',
        'Volume1Icon',
        'Volume2Icon',
        'VolumeXIcon',
        'VolumeIcon',
        'WatchIcon',
        'WifiOffIcon',
        'WifiIcon',
        'WindIcon',
        'XCircleIcon',
        'XOctagonIcon',
        'XSquareIcon',
        'XIcon',
        'YoutubeIcon',
        'ZapOffIcon',
        'ZapIcon',
        'ZoomInIcon',
        'ZoomOutIcon',
      ],
    }
  },
  computed: {
    filterIcons() {
      const seachQueryIcon = this.seachQuery.toLowerCase()
      return this.icons.filter(item => item.toLowerCase().includes(seachQueryIcon))
    },
  },
  setup() {
    const toast = useToast()
    const { copy } = useClipboard()

    const copyIconName = iconName => {
      copy(iconName)

      toast({
        component: ToastificationContent,
        props: {
          title: 'Icon name copied',
          icon: 'CopyIcon',
          variant: 'success',
        },
      })
    }

    return {
      copyIconName,
    }
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/ui-feather.scss';
</style>
