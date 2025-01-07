<template>
  <div>
    <div class="title text-4xl flex justify-center py-12">Value & Strategy</div>
    <div class="box-block">
      <div class="content">
        <div class="values">
          <div class="text-2xl pb-2">Our Values</div>
          <ul>
            <li>
              Integrity: We uphold the highest standards of honesty and transparency in all our
              dealings.
            </li>
            <li>
              Excellence: We strive for excellence in every aspect of our work, ensuring top-quality
              service delivery.
            </li>
            <li>
              Responsibility: We take responsibility for our impact on the environment and society,
              and actively seek ways to contribute positively.
            </li>
          </ul>
        </div>
        <div class="strategy">
          <div class="text-2xl pb-2">Strategic Goals</div>
          <ul>
            <li>
              Innovation: Continuously adopt and integrate advanced technologies to enhance our
              service offerings and operational efficiency.
            </li>
            <li>
              Sustainability: Implement practices that ensure minimal environmental impact and
              promote long-term ecological balance.
            </li>
            <li>
              Partnerships: Forge strong partnerships with key stakeholders in the energy sector to
              foster mutual growth and success.
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
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 5px;
  color: #ffffff;
}
ul {
  width: 60%;
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
