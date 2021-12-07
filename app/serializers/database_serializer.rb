class DatabaseSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :description
end
