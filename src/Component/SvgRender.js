import React, { Component } from 'react';

class SvgRender extends Component {
  render() {
    const { elem, width, height } = this.props;
    switch (elem) {
      case 'cpp':
        return (
          <svg width={width} height={height} viewbox="0 0 128 128">
            <path
              fill="#D26383"
              d="M115.4 30.7l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
            />
            <path
              fill="#9C033A"
              d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.7c0-.9-.1-1.9-.6-2.8l-106.6 62z"
            />
            <path
              fill="#fff"
              d="M85.3 76.1c-4.2 7.4-12.2 12.4-21.3 12.4-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"
            />
            <path d="M82.1 61.8h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zM100.6 61.8h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z" />
          </svg>
        );
      case 'angular':
        return (
          <svg width={width} height={height} viewbox="0 0 128 128">
            <path
              fill="#C4473A"
              d="M52.864 64h23.28l-12.375-25.877zM63.81 1.026l-59.257 20.854 9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635-59.637-20.485zm-15.766 73.974l-7.265 18.176-13.581.056 36.608-81.079-.07-.153h-.064l.001-.133.063.133h.14100000000000001l.123-.274v.274h-.124l-.069.153 38.189 81.417-13.074-.287-8.042-18.58-17.173.082"
            />
          </svg>
        );
      case 'c':
        return (
          <svg width={width} height={height} viewbox="0 0 128 128">
            <path
              fill="#659AD3"
              d="M115.4 30.7l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
            />
            <path
              fill="#03599C"
              d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.7c0-.9-.1-1.9-.6-2.8l-106.6 62z"
            />
            <path
              fill="#fff"
              d="M85.3 76.1c-4.2 7.4-12.2 12.4-21.3 12.4-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"
            />
          </svg>
        );
      case 'python':
        return (
          <svg width={width} height={height} viewbox="0 0 128 128">
            <path
              fill="#0091ea"
              d="M40 68v-10.079c0-6.973 6.218-12.921 13.383-12.921h21.102c5.874 0 9.515-5.04 9.515-10.938v-20.117c0-5.726-4.306-10.026-10.04-10.981-3.629-.604-7.131-.879-10.743-.862-3.611.017-7.339.324-10.374.862-8.941 1.578-10.843 4.884-10.843 10.981v8.055h21v3h-28.108999999999998c-6.14 0-11.516 3.53-13.198 10.552-1.939 8.047-2.025 13.202 0 21.605 1.502 6.254 5.089 10.843 11.228 10.843h7.079zm12.054-51.372c-2.19 0-3.964-1.795-3.964-4.013 0-2.229 1.773-4.039 3.964-4.039 2.182 0 3.964 1.811 3.964 4.039 0 2.218-1.782 4.013-3.964 4.013zM106.175 35.552c-1.517-6.114-4.416-10.552-10.563-10.552h-8.612v9.062c0 7.273-5.484 13.938-12.515 13.938h-21.102c-5.78 0-11.383 4.403-11.383 10.193v20.117c0 5.725 5.388 9.093 10.974 10.734 6.686 1.967 12.781 2.322 20.782 0 5.318-1.54 10.244-4.638 10.244-10.734v-7.31h-21v-3h32.611c6.14 0 8.428-4.416 10.563-10.843 2.206-6.618 2.112-13.115.001-21.605zm-30.361 40.073c2.19 0 3.965 1.795 3.965 4.015 0 2.227-1.774 4.037-3.965 4.037-2.182 0-3.963-1.811-3.963-4.037 0-2.22 1.781-4.015 3.963-4.015z"
            />
            <path
              fill="#fbc02d"
              d="M34.911 112.049c0-3.757-1.072-5.686-3.214-5.791-.853-.041-1.685.095-2.495.409-.646.231-1.082.461-1.311.692v8.968c1.371.86 2.588 1.26 3.649 1.197 2.247-.148 3.371-1.971 3.371-5.475zm2.643.157c0 1.909-.447 3.493-1.348 4.753-1.003 1.427-2.394 2.16-4.172 2.201-1.34.043-2.721-.378-4.142-1.258v8.151l-2.298-.82v-18.093c.377-.462.862-.859 1.451-1.196 1.368-.798 3.031-1.207 4.987-1.228l.033.032c1.788-.022 3.166.712 4.134 2.201.902 1.366 1.355 3.117 1.355 5.257z"
            />
            <path
              fill="#FFD845"
              d="M51.603 117.555c0 2.56-.257 4.333-.77 5.318-.516.986-1.497 1.773-2.945 2.359-1.174.463-2.444.714-3.808.757l-.38-1.448c1.386-.188 2.362-.378 2.928-.566 1.114-.377 1.878-.955 2.298-1.73.337-.631.503-1.835.503-3.618v-.599c-1.571.714-3.219 1.068-4.941 1.068-1.132 0-2.13-.354-2.99-1.068-.966-.777-1.449-1.764-1.449-2.958v-9.566l2.299-.787v9.63c0 1.028.332 1.82.996 2.376s1.524.822 2.578.803c1.054-.022 2.183-.431 3.382-1.228v-11.234h2.299v12.491z"
            />
            <path
              fill="#FFD845"
              d="M60.576 119.034c-.274.022-.525.032-.757.032-1.3 0-2.314-.309-3.038-.93-.722-.622-1.084-1.479-1.084-2.573v-9.054h-1.574v-1.446h1.574v-3.84l2.296-.817v4.657h2.583v1.446h-2.583v8.991c0 .862.231 1.474.694 1.83.397.295 1.029.463 1.889.506v1.198z"
            />
            <path
              fill="#FFD845"
              d="M74.493 118.845h-2.298v-8.873c0-.902-.211-1.68-.631-2.329-.485-.734-1.159-1.102-2.024-1.102-1.054 0-2.372.556-3.954 1.668v10.636h-2.298v-21.208l2.298-.725v9.659c1.469-1.068 3.073-1.604 4.816-1.604 1.218 0 2.203.41 2.958 1.228.757.817 1.134 1.836 1.134 3.053v9.597h-.001z"
            />
            <path
              fill="#FFD845"
              d="M86.711 111.688c0-1.444-.274-2.636-.82-3.579-.649-1.149-1.657-1.756-3.021-1.818-2.52.146-3.778 1.951-3.778 5.412 0 1.587.262 2.912.79 3.976.674 1.356 1.685 2.024 3.033 2.002 2.531-.02 3.796-2.017 3.796-5.993zm2.518.015c0 2.055-.526 3.765-1.575 5.131-1.154 1.528-2.749 2.296-4.783 2.296-2.017 0-3.589-.768-4.723-2.296-1.028-1.366-1.542-3.076-1.542-5.131 0-1.932.556-3.556 1.668-4.879 1.174-1.403 2.718-2.107 4.627-2.107 1.909 0 3.463.704 4.66 2.107 1.111 1.323 1.668 2.947 1.668 4.879z"
            />
            <path
              fill="#FFD845"
              d="M102.407 118.845h-2.299v-9.376c0-1.028-.31-1.831-.928-2.409-.619-.576-1.443-.855-2.472-.833-1.091.021-2.13.378-3.116 1.069v11.549h-2.299v-11.833c1.323-.963 2.54-1.592 3.652-1.886 1.049-.274 1.974-.41 2.771-.41.545 0 1.059.053 1.542.158.903.209 1.637.596 2.203 1.164.631.629.946 1.384.946 2.267v10.54z"
            />
          </svg>
        );
      case 'nodejs':
        return (
          <svg width={width} height={height} viewbox="0 0 128 128">
            <path
              fill="#83CD29"
              d="M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209c.074.041.179.041.246 0l7.937-4.581c.075-.042.122-.127.122-.215v-9.16c0-.09-.047-.173-.123-.219l-7.934-4.577c-.074-.042-.171-.042-.245 0l-7.933 4.578c-.076.045-.125.131-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198c-.515-.298-.832-.854-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587c.502-.283 1.169-.283 1.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16c0 .595-.319 1.148-.833 1.448l-7.937 4.582c-.252.147-.539.223-.834.223M116.778 74.438c-3.475 0-4.202-1.595-4.202-2.932 0-.126.103-.229.23-.229h1.026c.115 0 .21.082.228.194.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777.006.064-.017.127-.06.176-.044.045-.104.073-.168.073h-1.031c-.107 0-.201-.075-.223-.179-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"
            />
            <path
              fill="#404137"
              d="M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856c-.315-.183-.703-.184-1.019-.002l-8.416 4.859c-.314.182-.508.517-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812c.161-.09.261-.258.262-.44.001-.184-.097-.354-.256-.445l-8.468-4.86c-.159-.091-.256-.259-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52c.156-.091.35-.091.507 0l2.637 1.52c.158.091.255.258.255.439v2.396c0 .183.097.351.254.441.158.091.352.091.51-.001l5.039-2.932"
            />
            <path
              fill="#83CD29"
              d="M88.984 67.974c.061-.034.135-.034.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932c-.06.035-.135.035-.195 0l-1.614-.932c-.061-.035-.098-.099-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"
            />
            <path
              fill="#404137"
              d="M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666c-.079.046-.176.046-.254 0l-2.89-1.666c-.079-.046-.127-.13-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668c.079-.047.176-.047.255 0l2.891 1.668c.078.046.126.131.126.221v3.338zm.781-24.716c-.157-.087-.349-.085-.505.006-.155.092-.251.258-.251.438v12.915c0 .126-.068.244-.177.308-.11.063-.246.063-.356 0l-2.108-1.215c-.314-.181-.701-.181-1.015 0l-8.418 4.858c-.315.182-.509.518-.509.881v9.719c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861c.314-.183.508-.518.508-.881v-24.227c0-.368-.2-.708-.521-.888l-5.011-2.795"
            />
            <path
              fill="#83CD29"
              d="M38.238 59.407c.314-.182.702-.182 1.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861c-.314.181-.702.181-1.017 0l-8.415-4.861c-.314-.182-.508-.518-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"
            />
            <path
              fill="#404137"
              d="M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843c-.144-.084-.303-.127-.464-.133h-.087c-.16.006-.32.049-.464.133l-8.416 4.843c-.313.181-.509.517-.509.883l.018 13.04c0 .182.095.351.254.439.156.094.349.094.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226c.158-.093.332-.137.508-.137.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864c.157.094.353.094.508 0 .155-.089.252-.258.252-.439l.019-13.04"
            />
          </svg>
        );
      case 'android':
        return (
          <svg width={width} height={height} viewbox="0 0 128 128">
            <path
              fill="#fff"
              d="M13.699 108.645h8.047v17.421h-3.492v-14.026l-3.116.012h-.749c-1.74 0-2.707.073-2.9.218-1.039.282-1.917.882-2.634 1.8-.772 1.104-1.159 2.203-1.159 3.298 0 1.353.523 2.598 1.57 3.733.701.668 1.305 1.071 1.813 1.208.507.258 1.381.387 2.621.387h2.429v3.371h-2.911c-2.159 0-3.983-.568-5.474-1.704-1.079-.854-1.8-1.627-2.162-2.319-.902-1.434-1.354-2.9-1.354-4.398v-.507c0-2.094.785-4.015 2.356-5.763.95-.926 1.728-1.51 2.331-1.752.436-.242 1.035-.471 1.801-.688.684-.195 1.679-.291 2.983-.291zM39.324 112.124c.346.467.596.866.749 1.196.226.395.438.926.641 1.595.241.806.362 1.901.362 3.286v7.865h-3.492v-8.24c0-2.771-1.252-4.623-3.757-5.557-.572-.161-1.075-.246-1.511-.254-.435.008-.934.093-1.498.254-2.505.934-3.757 2.787-3.757 5.557v8.24h-3.504v-7.865c0-1.385.121-2.48.362-3.286.201-.668.415-1.2.641-1.595.153-.338.406-.737.761-1.196 1.877-2.304 4.209-3.456 6.995-3.456 2.788 0 5.123 1.152 7.008 3.456zM49.122 108.657c2.345 0 3.689.052 4.036.157.95.113 2.021.512 3.213 1.196.652.403 1.346 1.019 2.078 1.848 1.305 1.619 1.957 3.459 1.957 5.521 0 1.208-.233 2.348-.7 3.419-.918 2.086-2.429 3.592-4.53 4.519-.975.5-2.473.749-4.494.749h-7.406l-.387-.073v-3.31h8.167c.87 0 1.542-.077 2.018-.229 1.265-.427 2.19-1.063 2.778-1.909.717-1.071 1.075-2.114 1.075-3.129 0-1.023-.31-2.03-.93-3.021-.387-.572-.813-1.006-1.28-1.305-.854-.701-2.074-1.051-3.661-1.051h-8.167v-3.383h6.233zM62.219 108.657h11.188c1.973 0 3.52.592 4.639 1.776.5.467.846.918 1.039 1.353.436.87.652 1.72.652 2.549v.495c0 1.273-.552 2.517-1.654 3.733-.709.676-1.354 1.111-1.934 1.305 1.466 1.563 2.199 3.628 2.199 6.198h-3.516v-.266c0-1.901-.77-3.411-2.308-4.531-.878-.62-2.026-.93-3.443-.93h-6.862v-3.359h11.405c1.248 0 2.094-.616 2.537-1.848.048-.25.08-.459.096-.628 0-.685-.285-1.305-.857-1.86-.491-.387-1.015-.58-1.57-.58 0-.032-.169-.048-.508-.048h-11.103v-3.359zM90.26 108.668h.12c2.675 0 4.958 1.096 6.851 3.286 1.225 1.643 1.836 3.431 1.836 5.364v.121c0 2.674-1.119 4.945-3.358 6.813-1.627 1.208-3.411 1.813-5.352 1.813h-.121c-2.658 0-4.934-1.087-6.826-3.262-.66-.926-1.123-1.776-1.39-2.549-.313-.967-.471-1.913-.471-2.839v-.121c0-2.626 1.083-4.873 3.25-6.742 1.466-1.047 2.803-1.635 4.011-1.764.37-.079.853-.12 1.45-.12zm-5.232 8.675c0 1.514.592 2.843 1.776 3.987 1.055.902 2.162 1.353 3.322 1.353h.338c.935 0 1.885-.318 2.852-.955.998-.733 1.675-1.667 2.029-2.803.112-.298.193-.81.241-1.534 0-1.482-.575-2.791-1.728-3.927-1.079-.958-2.263-1.438-3.552-1.438-1.506 0-2.843.628-4.011 1.885-.491.645-.802 1.192-.931 1.643-.223.629-.336 1.225-.336 1.789zM100.879 108.668h3.491v17.397h-3.491v-17.397zM112.489 108.657c2.344 0 3.688.052 4.035.157.95.113 2.021.512 3.213 1.196.652.403 1.346 1.019 2.078 1.848 1.305 1.619 1.957 3.459 1.957 5.521 0 1.208-.233 2.348-.7 3.419-.918 2.086-2.429 3.592-4.53 4.519-.975.5-2.473.749-4.494.749h-7.406l-.387-.073v-3.31h8.167c.87 0 1.542-.077 2.018-.229 1.265-.427 2.19-1.063 2.778-1.909.717-1.071 1.075-2.114 1.075-3.129 0-1.023-.31-2.03-.93-3.021-.387-.572-.813-1.006-1.28-1.305-.854-.701-2.074-1.051-3.661-1.051h-8.167v-3.383h6.234zM29.19 76.835c-4.484.002-8.128-3.646-8.129-8.13l-.001-24.891c-.001-4.479 3.642-8.127 8.121-8.128 2.178-.002 4.216.843 5.753 2.377 1.537 1.535 2.383 3.578 2.384 5.749l-.002 24.892c.005 2.169-.837 4.21-2.373 5.744-1.534 1.54-3.578 2.387-5.753 2.387M29.184 37.871c-3.282-.002-5.942 2.665-5.943 5.944l.004 24.889c.001 3.291 2.666 5.946 5.944 5.95 3.285-.004 5.946-2.66 5.943-5.949v-24.893c-.002-3.279-2.665-5.943-5.948-5.941"
            />
            <path
              fill="#fff"
              d="M92.942 39.104l-2.186-.001-53.54.007-2.186.001-.001-2.186c-.005-8.972 4.883-17.316 12.889-22.246l-3.112-5.682c-.38-.666-.476-1.509-.255-2.28.226-.771.757-1.434 1.469-1.813.412-.233.916-.363 1.424-.362 1.103 0 2.113.599 2.645 1.565l3.258 5.935c3.371-1.237 6.931-1.867 10.607-1.866 3.729-.001 7.307.629 10.691 1.871l3.253-5.944c.524-.965 1.541-1.565 2.642-1.564.496-.001.99.12 1.426.354.732.402 1.242 1.042 1.467 1.819.225.772.134 1.586-.258 2.293l-3.11 5.678c7.993 4.94 12.875 13.279 12.874 22.235l.003 2.186zM77.115 15.52l4.148-7.576c.221-.396.076-.903-.324-1.122-.405-.219-.906-.069-1.12.328l-4.191 7.652c-3.525-1.565-7.473-2.446-11.646-2.442-4.163-.004-8.104.873-11.619 2.434l-4.194-7.635c-.216-.402-.721-.549-1.117-.328-.402.215-.55.721-.327 1.117l4.149 7.569c-8.154 4.206-13.663 12.214-13.658 21.409l53.539-.006c.002-9.193-5.497-17.184-13.64-21.4m-25.309 11.707c-1.231-.002-2.237-1.005-2.237-2.243 0-1.234 1.004-2.247 2.24-2.247 1.24-.001 2.245 1.013 2.246 2.247 0 1.236-1.006 2.242-2.249 2.243m24.379-.005c-1.238.001-2.248-1-2.245-2.244 0-1.231 1.006-2.245 2.245-2.25 1.231.004 2.241 1.018 2.24 2.25.001 1.24-1.004 2.245-2.24 2.244M54.049 105.205c-4.48-.001-8.126-3.645-8.127-8.128l-.002-10.987-2.136.002c-2.282.001-4.422-.885-6.031-2.496-1.612-1.608-2.5-3.751-2.497-6.034l-.008-38.566v-2.188h2.186l53.138-.008 2.187-.001v2.186l.006 38.571c0 4.704-3.826 8.532-8.529 8.531l-2.148.001.002 10.981c0 4.481-3.646 8.129-8.124 8.129-2.171.004-4.209-.839-5.748-2.378-1.539-1.536-2.387-3.576-2.386-5.746v-10.986h-3.653v10.985c-.002 4.482-3.648 8.133-8.13 8.132"
            />
            <path
              fill="#fff"
              d="M37.444 77.563c-.003 3.512 2.832 6.347 6.341 6.346h4.318l.005 13.169c-.001 3.279 2.663 5.944 5.94 5.945 3.283 0 5.944-2.668 5.941-5.95v-13.165l8.024-.002-.001 13.168c.004 3.28 2.671 5.948 5.946 5.942 3.284.002 5.946-2.666 5.945-5.946l-.004-13.166 4.334-.001c3.498.001 6.343-2.84 6.343-6.346l-.007-38.573-53.136.009.011 38.57zM98.816 76.825c-4.483.001-8.13-3.642-8.129-8.126l-.006-24.89c.001-4.484 3.642-8.131 8.122-8.131 4.486-.001 8.135 3.646 8.135 8.128l.002 24.889c.001 4.481-3.642 8.131-8.124 8.13M98.809 37.863c-3.282-.003-5.941 2.662-5.941 5.945l.002 24.889c.002 3.287 2.661 5.946 5.945 5.943 3.282 0 5.939-2.657 5.941-5.946l-.006-24.889c-.001-3.282-2.658-5.943-5.941-5.942"
            />
            <path
              fill="#A4C439"
              d="M29.184 37.871c-3.282-.002-5.942 2.665-5.943 5.944l.004 24.889c.001 3.291 2.663 5.946 5.945 5.946 3.284 0 5.945-2.656 5.942-5.945v-24.893c-.002-3.279-2.665-5.943-5.948-5.941m47.931-22.351l4.148-7.576c.221-.396.075-.9-.325-1.124-.405-.214-.905-.069-1.119.33l-4.19 7.655c-3.526-1.569-7.471-2.449-11.646-2.444-4.163-.004-8.107.873-11.619 2.434l-4.194-7.635c-.218-.402-.72-.548-1.116-.329-.403.217-.551.722-.328 1.117l4.149 7.57c-8.154 4.206-13.663 12.214-13.658 21.409l53.539-.006c.001-9.194-5.498-17.185-13.641-21.401m-25.309 11.707c-1.231-.002-2.237-1.005-2.237-2.243 0-1.234 1.003-2.248 2.24-2.247 1.24-.001 2.245 1.013 2.246 2.247 0 1.236-1.006 2.242-2.249 2.243m24.379-.005c-1.238.001-2.245-1.002-2.245-2.244.005-1.23 1.006-2.245 2.245-2.25 1.231.004 2.241 1.018 2.24 2.25.003 1.24-1.004 2.245-2.24 2.244m-38.75 11.771l.008 38.572c-.002 3.509 2.836 6.341 6.342 6.341l4.318.001.005 13.169c-.001 3.279 2.665 5.945 5.94 5.945 3.283 0 5.944-2.668 5.945-5.949l-.003-13.164 8.024-.002.003 13.168c0 3.277 2.667 5.948 5.942 5.942 3.284.002 5.946-2.666 5.945-5.946l-.004-13.166 4.334-.003c3.498.001 6.343-2.834 6.345-6.344l-.007-38.572-53.137.008zm67.317 4.813c0-3.283-2.66-5.944-5.943-5.943-3.282-.003-5.941 2.662-5.941 5.945l.005 24.89c-.001 3.286 2.658 5.942 5.942 5.942 3.282 0 5.941-2.657 5.941-5.946l-.004-24.888z"
            />
          </svg>
        );
      case 'react':
        return (
          <svg width={width} height={height} viewbox="0 0 128 128">
            <path d="M64 81.7c7.3 7.1 14.5 11.3 20.3 11.3 1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3-7.2-7.1-14.4-11.3-20.2-11.3-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zm-12.4-10.3c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zm-14.7 20.1c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zm-28.7-19.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7c-11.2-3.2-17.9-8.1-17.9-12.6 0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6zm2.1 11c.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10-1.1 0-2-.2-2.9-.7-3.4-1.9-4.5-8-3.1-16.5zM33.6 112.3c2.2-2.7 2.3-5.7 1.1-8.7-1.2-3-3.7-4.4-6.8-4.5-3.7-.1-7.5 0-11.2 0h-.7v25.9h3v-9.8h4.7c.6 0 1.1.2 1.4.7l6 9.3c.1.2.4.5.6.5h3.9c-2.4-3.7-4.7-7.2-7.1-10.8 2.1-.3 3.9-1 5.1-2.6zm-14.6-.2v-9.9h1.1c2.3 0 4.7-.1 7 .1 2.7.1 4.6 2.2 4.6 4.9s-2.2 4.8-4.9 4.9c-2.4.1-4.8 0-7.8 0zM57.7 113.4c-1.6-7-8-8.8-12.9-6.6-3.8 1.7-5.5 5-5.6 9.1-.1 3.1.8 5.9 3.2 8 2.7 2.4 6 2.7 9.4 2.1 1.9-.4 3.6-1.3 4.9-2.7-.5-.7-1-1.4-1.5-2-2.8 2.4-5.9 3.2-9.3 1.6-2.2-1.1-3.3-3.8-3.5-5.8h15.5v-1.3c.1-.9 0-1.7-.2-2.4zm-15.1 1.6c-.3-3 2.7-6.2 6-6.2 3.8-.1 6.2 2.2 6.3 6.2h-12.3zM73.3 106.3c-1.5-.3-3.1-.4-4.6-.3-2.4.2-4.5 1.3-6.2 3.1.5.7.9 1.4 1.5 2.2.2-.2.4-.4.6-.5 1.6-1.5 3.5-2.3 5.8-2.1 1.8.1 3.5.7 4 2.5.4 1.4.3 2.9.4 4.4-.3 0-.4-.1-.5-.2-2.4-2-5.1-2.4-8-1.7-2.7.7-4.4 2.8-4.6 5.5-.2 3.1 1.2 5.4 3.9 6.5 1.7.7 3.6.7 5.4.3 1.4-.3 2-1.1 4-2.2v1.3h2.8c0-4 .1-8.9 0-13.5 0-2.9-1.7-4.7-4.5-5.3zm1.4 12.6c-.1.3 0 .6 0 .9 0 2.1-.5 2.8-2.5 3.6-1.4.5-2.9.7-4.4.2-1.7-.5-2.9-2-2.9-3.7-.1-1.7 1-3.4 2.7-3.9 2.3-.8 4.4-.3 6.3 1.1.6.5 1 1 .8 1.8zM90.3 109c2.6-.8 5-.3 6.8 1.9l.3.2c.7-.6 1.3-1.2 2.1-1.9-.3-.3-.4-.5-.6-.8-2.9-3.1-8.6-3.5-12.1-1-4.9 3.6-4.8 10.6-2.4 14.3 2.3 3.5 5.6 4.7 9.5 4.2 2.3-.3 4.2-1.4 5.7-3.3-.7-.6-1.4-1.2-2.1-1.9-.2.2-.3.3-.4.5-2.7 3-7.2 2.7-9.6-.5-1.4-1.9-1.7-4.1-1.3-6.3.2-2.5 1.5-4.5 4.1-5.4zM111.1 122.6c-.2.1-.3.2-.3.2-.8.6-1.6.7-2.5.4-.9-.4-1-1.2-1.1-2v-11.4c0-.2 0 .2.1-.8h3.8v-3h-4v-5h-3v5.4h-2.6c-.2 0-.5.2-.5.4-.1.7 0 1.2 0 2.2h3.2v12.799999999999999c0 1.6.4 3 1.8 3.8 1.5.9 4.4.7 5.7-.4.2-.1.3-.5.3-.6-.3-.6-.6-1.3-.9-2z" />
          </svg>
        );
      case 'facebook':
        return (
          <svg width={width} height={height} viewbox="0 0 24 24">
            <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
          </svg>
        );
      case 'twitter':
        return (
          <svg width={width} height={height} viewbox="0 0 24 24">
            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
          </svg>
        );
      case 'github':
        return (
          <svg width={width} height={height} viewbox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        );
      case 'telegram':
        return (
          <svg width={width} height={height} viewbox="0 0 24 24">
            <path d="M9.028 20.837c-.714 0-.593-.271-.839-.949l-2.103-6.92L22.263 3.37" />
            <path d="M9.028 20.837c.552 0 .795-.252 1.105-.553l2.941-2.857-3.671-2.214" />
            <path d="M9.403 15.213l8.89 6.568c1.015.56 1.748.271 2-.942l3.62-17.053c.372-1.487-.564-2.159-1.534-1.72L1.125 10.263c-1.45.582-1.443 1.392-.264 1.753l5.455 1.7L18.94 5.753c.595-.36 1.143-.167.694.232" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg width={width} height={height} viewbox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      case 'gmail':
        return (
          <svg width={width} height={height} viewbox="0 0 24 24">
            <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" />
          </svg>
        );
      default:
        return <div />;
    }
  }
}

export default SvgRender;