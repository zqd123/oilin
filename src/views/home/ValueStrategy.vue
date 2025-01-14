<template>
  <div>
    <div class="title text-4xl flex justify-center py-12">
      {{ $t('value') }} & {{ $t('and-strategy') }}
    </div>
    <div class="box-block">
      <div class="content">
        <div class="values">
          <div class="text-2xl pb-2">{{ $t('our-values') }}</div>
          <ul>
            <li>
              {{ $t('iwut') }}
            </li>
            <li>
              {{ $t('ewsf') }}
            </li>
            <li>
              {{ $t('rwtr') }}
            </li>
          </ul>
        </div>
        <div class="strategy">
          <div class="text-2xl pb-2">{{ $t('strategic-goals') }}</div>
          <ul>
            <li>
              {{ $t('icaa') }}
            </li>
            <li>
              {{ $t('sipt') }}
            </li>
            <li>
              {{ $t('pfsp') }}
            </li>
          </ul>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>
<style scoped>
.box-block {
  height: 401px;
  background: #1944b4;
  position: relative;
}
.content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 10px 5px 10px 120px;
  color: #ffffff;
}
ul {
  width: 50%;
}
li {
  display: flex;
  /* align-items: center; */
  font-size: 16px;
  /* list-style-type: disc;
  list-style-position: inside; */
}
li::before {
  content: '';
  display: block;
  height: 5px;
  width: 5px;
  background: #ffffff;
  margin-right: 10px;
  border-radius: 50%;
  margin-top: 10px;
}
.right {
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 400px;
  background-image: url('../../assets/home/value-strategy-bg.jpg');
  background: linear-gradient(91deg, #1944b4 0%, rgba(25, 68, 180, 0) 100%),
    url('../../assets/home/value-strategy-bg.jpg');
  background-size: cover, cover;
  background-position: center, center;
}
</style>
