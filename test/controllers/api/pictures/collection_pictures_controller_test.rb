require 'test_helper'

class Api::Pictures::CollectionPicturesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_pictures_collection_pictures_index_url
    assert_response :success
  end

end
